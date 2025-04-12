import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() showButton!: boolean;
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<Event>();
}
