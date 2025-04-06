import { Component, inject, Input, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Coffe } from '../../models/Coffe';
import { CoffeService } from '../../services/coffe.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  @Input() coffeesList: Coffe[] = [];
}
