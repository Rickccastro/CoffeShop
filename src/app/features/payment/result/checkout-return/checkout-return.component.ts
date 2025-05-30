import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutSessionsService } from '../../../../shared/services/payment/checkout-sessions.service';

@Component({
  selector: 'app-checkout-return',
  standalone: true,
  imports: [],
  templateUrl: './checkout-return.component.html',
  styleUrl: './checkout-return.component.css'
})
export class CheckoutReturnComponent implements OnInit {
    checkoutSessionsService = inject(CheckoutSessionsService);
    route = inject(ActivatedRoute);
  
  ngOnInit(): void {
    this.checkSessionStatus();
  }

  private checkSessionStatus() {
    const sessionId = this.route.snapshot.queryParamMap.get('session_id');
    this.checkoutSessionsService.createSessionStatus(sessionId as string);

    if (!sessionId) {
      console.error('Session ID não encontrado na URL');
      return;
    }
  }
}
