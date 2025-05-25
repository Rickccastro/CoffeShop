import { Component, inject, OnInit, signal } from '@angular/core';
import { GridComponent } from '../../../shared/components/grid/grid.component';
import { CardDisplay } from '../../../core/models/CardDisplay';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coffees',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './coffees.component.html',
  styleUrl: './coffees.component.css',
})
export class CoffeesComponent implements OnInit {
  coffeesList = signal<CardDisplay[]>([]);

  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.data.subscribe(({ coffee }) => {
      this.coffeesList.set(coffee as CardDisplay[]);
    });
  }
}
