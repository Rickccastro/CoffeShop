import { Component, inject, Input, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from "../../components/button/button.component";
import { CardComponent } from '../../components/card/card.component';
import { Coffe } from '../../models/Coffe';
import { ActivatedRoute } from '@angular/router';
import { ListProductsComponent } from '../../components/list-products/list-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent,ListProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  coffees = signal<Coffe[]>([]);
  @Input() buttonLabel: string = 'Learn More';

  private route = inject(ActivatedRoute);
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.coffees.set(data['coffe']);
    });
  }
}
