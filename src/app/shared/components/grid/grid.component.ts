import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ListProductsComponent } from '../list-products/list-products.component';
import { ActivatedRoute } from '@angular/router';
import { CardDisplay } from '../../../core/models/CardDisplay';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [ListProductsComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
   @Input() dataGrid: CardDisplay[] = [];
}
