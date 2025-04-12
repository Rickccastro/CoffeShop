import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
  httpClient = inject(HttpClient);

   getFeedbacks(): void {
      this.httpClient.get('http://localhost:3000/feedbacks');
    }
}
