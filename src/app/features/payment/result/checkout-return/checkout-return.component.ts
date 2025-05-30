import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout-return',
  standalone: true,
  imports: [],
  templateUrl: './checkout-return.component.html',
  styleUrl: './checkout-return.component.css'
})
export class CheckoutReturnComponent implements OnInit {
  customerEmail: string = '';
  isSuccess: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkSessionStatus();
  }

  private checkSessionStatus() {
    const sessionId = this.route.snapshot.queryParamMap.get('session_id');

    if (!sessionId) {
      console.error('Session ID não encontrado na URL');
      return;
    }

    this.http.get<any>(`/session-status?session_id=${sessionId}`).subscribe({
      next: (session) => {
        if (session.status === 'open') {
          this.router.navigate(['/payment']);
        } else if (session.status === 'complete') {
          this.isSuccess = true;
          this.customerEmail = session.customer_email;
        }
      },
      error: (err) => {
        console.error('Erro ao obter status da sessão', err);
      },
    });
  }
}
