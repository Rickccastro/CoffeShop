import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonComponent } from '../button/button.component';
import { CardDisplay } from '../../../core/models/CardDisplay';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() cardData: Partial<CardDisplay> = {}; 
  @Input() cardOption?: 'feedback' |'small' |'grid'| 'market' |'default' = 'default';
  @Input() showButton!: boolean;
  @Input() buttonText!: string;
  @Output() buttonClick = new EventEmitter<Partial<CardDisplay>>(); 
  quantity: number = 1;

  handleButtonClick() {
    this.buttonClick.emit(this.cardData);
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
