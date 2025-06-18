import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent {
  @Input() position: 'esquerda' | 'direita' | 'baixo' = 'esquerda';

  getSplashImage(): string {
  const base = '../../../assets/coffes/coffe-splash';
  console.log(`${base}-baixo.svg` );
  return this.position === 'baixo' ? `${base}-baixo.svg` : `${base}.svg`;
}
}
