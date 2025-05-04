import { CardComponent } from '../card/card.component';
import { CardDisplay } from '../../../core/models/CardDisplay';
import { Component, EventEmitter, HostListener, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent implements OnInit, OnChanges{
  @Input() cardsList: Partial<CardDisplay>[] = [];
  @Input() cardOption?: 'feedback' |'small' | 'default' = 'default';
  @Input() currentIndex: number = 0;
  @Output() visibleCardsChange = new EventEmitter<Partial<CardDisplay>[]>();
  visibleCards: Partial<CardDisplay>[] = [];


  cardsToShow: number = 4;

  ngOnInit(): void {
    this.updateCardsToShow();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cardsList'] || changes['currentIndex']) {
      this.emitVisibleCards();
    }
  }
  

  @HostListener('window:resize', [])
  onResize() {
    this.updateCardsToShow();
  }

  updateCardsToShow() {
    const width = window.innerWidth;

    if (width < 768) this.cardsToShow = 1;
    else if (width < 1200) this.cardsToShow = 3;
    else this.cardsToShow = 4;

    this.emitVisibleCards();
  }

  emitVisibleCards() {
    const total = this.cardsList.length;
  
    if (this.cardOption === 'feedback') {
      this.visibleCards = total ? [this.cardsList[this.currentIndex]] : [];
      this.visibleCardsChange.emit(this.visibleCards);
      return;
    }
  
    const visible: Partial<CardDisplay>[] = [];
  
    for (let i = 0; i < this.cardsToShow; i++) {
      const index = (this.currentIndex + i) % total;
      visible.push(this.cardsList[index]);
    }
  
    this.visibleCards = visible;
    this.visibleCardsChange.emit(visible);
  }  

  hasText(): string {
    return this.showButtonCardDisplay() ? 'Order Now' : '';
  }

  showButtonCardDisplay(): boolean{
    if(this.cardOption === 'default'){
     return true
    } 
    return false 
  }
}
