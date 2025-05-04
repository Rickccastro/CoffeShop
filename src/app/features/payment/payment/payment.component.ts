import { Component } from '@angular/core';
import { PaymentbrickComponent } from "../components/paymentbrick/paymentbrick.component";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [PaymentbrickComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

}
