import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonComponent } from '../button/button.component';
import { CardDisplay } from '../../models/CardDisplay';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() data: Partial<CardDisplay> = {}; 
  @Input() cardOption?: 'feedback' |'small' | 'default' = 'default';
  @Input() showButton!: boolean;
  @Input() buttonText!: string;
}
