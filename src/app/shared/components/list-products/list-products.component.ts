import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardDisplay } from '../../../core/models/CardDisplay';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent implements OnInit {
  @Input() cardsList: Partial<CardDisplay>[] = [];
  @Input() cardOption?: 'feedback' |'small' | 'default' = 'default';
  buttonText:string = ''
  currentIndex = 0;
  cardsToShow: number = 4; // valor padrão para desktop



  ngOnInit(): void {
    this.updateCardsToShow(); // definir valor inicial baseado na tela
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateCardsToShow();
  }

  updateCardsToShow() {
    const width = window.innerWidth;

    if (width < 768) {
      this.cardsToShow = 1; // mobile
    }
    if(width<845){
      this.cardsToShow = 3;
    } else {
      this.cardsToShow = 4; // desktop
    }
  }

  next(): void {
    if (this.cardsList.length === 0) return;
  
    this.currentIndex = (this.currentIndex + 1) % this.cardsList.length;
  }
  
  prev(): void {
    if (this.cardsList.length === 0) return;
  
    this.currentIndex = (this.currentIndex - 1 + this.cardsList.length) % this.cardsList.length;
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
  
    if (this.cardOption === 'feedback') {
      return totalCards ? [this.cardsList[this.currentIndex]] : [];
    }
  
    const cardsToShow: any[] = [];
    for (let i = 0; i < this.cardsToShow; i++) {
      const index = (this.currentIndex + i) % totalCards;
      cardsToShow.push(this.cardsList[index]);
    }
  
    return cardsToShow;
  }
}
