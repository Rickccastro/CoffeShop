import { Component, inject, Input, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Coffe } from '../../models/Coffe';
import { CardDisplay } from '../../models/CardDisplay';
import { ActivatedRoute } from '@angular/router';
import { ListProductsComponent } from '../../components/list-products/list-products.component';
import { STATIC_BANNERS } from '../../data/static-data';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, ListProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  coffees = signal<CardDisplay[]>([]);
  feedbacks = signal<CardDisplay[]>([]);

  banners: CardDisplay[] = STATIC_BANNERS;
  buttonLabel: string = 'Learn More';
  buttonText: string = 'Join Us';
  @Input() cardOption: 'small' | 'default' = 'default';


  private route = inject(ActivatedRoute);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.coffees.set(data['coffe']);
      this.feedbacks.set(data['feedbacks']);
    });
  }
}
