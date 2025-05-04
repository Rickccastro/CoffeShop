import { Component, inject, Input, signal } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Coffe } from '../../core/models/Coffe';
import { ActivatedRoute } from '@angular/router';
import { ListProductsComponent } from '../../shared/components/list-products/list-products.component';
import { Banner } from '../../core/models/Banner';
import { Feedback } from '../../core/models/Feedback';
import { STATIC_BANNERS } from '../../shared/data/static-data';
import { CarouselComponent } from "../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, ListProductsComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  coffees = signal<Coffe[]>([]);
  feedbacks = signal<Feedback[]>([]);

  banners: Partial<Banner>[] = STATIC_BANNERS;
  @Input() cardOption: 'small' | 'default' = 'default';

  private route = inject(ActivatedRoute);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.coffees.set(data['coffe']);
      this.feedbacks.set(data['feedback']);
    });
  }
}
