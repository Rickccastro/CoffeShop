import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
