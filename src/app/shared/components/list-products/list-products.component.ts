import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardDisplay } from '../../../core/models/CardDisplay';
import { ButtonComponent } from '../button/button.component';
import { Coffe } from '../../../core/models/Coffe';
import { Feedback } from '../../../core/models/Feedback';


@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  @Input() cardsList: Partial<CardDisplay>[] = [];
  @Input() cardOption?: 'feedback' |'small' | 'default' = 'default';
  
  buttonText:string = ''

  currentIndex = 0;

  next(): void {
    if (this.cardsList.length === 0) return;
  
    this.currentIndex = (this.currentIndex + 1) % this.cardsList.length;
  }
  
  prev(): void {
    if (this.cardsList.length === 0) return;
  
    this.currentIndex =
      (this.currentIndex - 1 + this.cardsList.length) % this.cardsList.length;
  }

  hasText(): string {
    if(this.showButtonCardDisplay()){
     return this.buttonText= 'Order Now'
    }
    return this.buttonText
  }

  showButtonCardDisplay(): boolean{
    if(this.cardOption === 'default'){
     return true
    } 
    return false 
  }

  carouselShowButton(): boolean {
    return this.visibleCardsList.some(
      (card) =>
        this.cardOption === 'default' || this.cardOption === 'feedback'
    );
  }

  get visibleCardsList(): any[] {
    const totalCards = this.cardsList.length;
    const visible = 4;
  
    if (this.cardOption === 'feedback') {
      return totalCards ? [this.cardsList[this.currentIndex]] : [];
    }
  
    const cardsToShow: any[] = [];
    for (let i = 0; i < visible; i++) {
      const index = (this.currentIndex + i) % totalCards;
      cardsToShow.push(this.cardsList[index]);
    }
  
    return cardsToShow;
  }
}
