import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonComponent } from '../button/button.component';
import { CardDisplay } from '../../../core/models/CardDisplay';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() cardData: Partial<CardDisplay> = {};
  @Input() cardOption?: 'feedback' | 'small' | 'grid' | 'market' | 'default' =
    'default';
  @Input() showButton!: boolean;
  @Input() buttonText!: string;
  @Output() buttonClick = new EventEmitter<Partial<CardDisplay>>();
  dialog = inject(MatDialog);
  router = inject(Router);
  viewportScroller = inject(ViewportScroller);

  quantity: number = 1;

  handleButtonClick() {
    if (this.cardOption === 'grid') {
      this.buttonClick.emit(this.cardData);
      return;
    }
    this.router.navigate(['/coffees']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
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
