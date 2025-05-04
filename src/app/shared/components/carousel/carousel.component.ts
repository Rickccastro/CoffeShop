import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from "../list-products/list-products.component";
import { CardDisplay } from '../../../core/models/CardDisplay';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ListProductsComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() cardsList: Partial<CardDisplay>[] = [];
  @Input() cardOption?: 'feedback' | 'small' | 'default' = 'default';

  currentIndex = 0;
  visibleCards: Partial<CardDisplay>[] = [];

  next(): void {
    if (this.cardsList.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.cardsList.length;
  }

  prev(): void {
    if (this.cardsList.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.cardsList.length) % this.cardsList.length;
  }

  onVisibleCardsChange(visible: Partial<CardDisplay>[]) {
    this.visibleCards = visible;
  }
}
