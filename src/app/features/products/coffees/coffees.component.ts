import { Component, inject, Input, signal } from '@angular/core';
import { ListProductsComponent } from "../../../shared/components/list-products/list-products.component";
import { CardDisplay } from '../../../core/models/CardDisplay';
import { Coffe } from '../../../core/models/Coffe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coffees',
  standalone: true,
  imports: [ListProductsComponent],
  templateUrl: './coffees.component.html',
  styleUrl: './coffees.component.css'
})
export class CoffeesComponent {
    coffees = signal<Coffe[]>([]); 

    private route = inject(ActivatedRoute);
      ngOnInit() {
        this.route.data.subscribe((data) => {
          this.coffees.set(data['coffe']);
        });
      }
}
