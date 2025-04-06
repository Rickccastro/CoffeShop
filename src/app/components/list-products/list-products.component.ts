import { Component, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Coffe } from '../../models/Coffe';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listCoffes = signal<Coffe[]>(this.getCoffes())
  getCoffes(): Coffe[] {

    return [new Coffe()]; // Example object
  }
}
