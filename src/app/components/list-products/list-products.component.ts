import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardDisplay } from '../../models/CardDisplay';
import { ButtonComponent } from '../button/button.component';
import { Coffe } from '../../models/Coffe';
import { Feedback } from '../../models/Feedback';


@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  @Input() cardsList: Partial<CardDisplay>[] = [];
  @Input() cardOption: 'feedback' |'small' | 'default' = 'default';
  buttonText:string = ''

  visibleCards: number = 4;
  currentIndex = 0;

  prev(): void {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
  }

  next(): void {
    this.currentIndex = Math.min(
      this.cardsList.length - this.visibleCards,
      this.currentIndex + 1
    );
  }

  hasText(): string {
    if(this.hasVisibleCardsWithShowButton()){
     return this.buttonText= 'Order Now'
    }
    return this.buttonText
  }

  hasVisibleCardsWithShowButton(): boolean {
    return this.visibleCardsList.some(
      (card) =>
        this.cardOption === 'default'
    );
  }

  get visibleCardsList(): any[] {
    const visible = this.cardsList.slice(
      this.currentIndex,
      this.currentIndex + this.visibleCards
    );
    if(this.cardOption === 'feedback'){
      visible.length = 1
    }
    return visible;
  }
}
