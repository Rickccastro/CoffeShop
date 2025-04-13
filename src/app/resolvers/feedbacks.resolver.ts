import { ResolveFn } from '@angular/router';
import { FeedbacksService } from '../services/feedbacks.service'; // Adjust the path as needed
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/Feedback';


export const feedbackResolver: ResolveFn <Observable<Feedback[]>> = () => {
  const service = inject(FeedbacksService);
   return service.getFeedbacks(); 
};