import { Component, inject, Input, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Coffe } from '../../core/components/models/Coffe';
import { CardDisplay } from '../../core/components/models/CardDisplay';
import { ActivatedRoute } from '@angular/router';
import { ListProductsComponent } from '../../components/list-products/list-products.component';
import { STATIC_BANNERS } from '../../data/static-data';
import { Banner } from '../../core/components/models/Banner';
import { Feedback } from '../../core/components/models/Feedback';
import { InputComponent } from '../../components/input/input.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, ListProductsComponent],
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
