import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Feedback } from '../models/Feedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
  httpClient = inject(HttpClient);

   getFeedbacks(): Observable<Feedback[]> {
     return this.httpClient.get<Feedback[]>('http://localhost:3000/feedbacks');
    }
}
