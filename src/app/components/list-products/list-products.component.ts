import { Component, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  coffes = signal<{ name: string; price: number }[]>(this.getCoffes())
  getCoffes(): Coffe[] {

    return { 'Espresso',  2.5 }; // Example object
  }
}
