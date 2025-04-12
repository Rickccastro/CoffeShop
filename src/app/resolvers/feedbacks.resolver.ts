import { ResolveFn } from '@angular/router';
import { FeedbacksService } from '../services/feedbacks.service'; // Adjust the path as needed
import { inject } from '@angular/core';


export const feedbacksResolver: ResolveFn <null> /*<Observable<Coffe[]>> */= () => {
  const service = inject(FeedbacksService);
  // return service.getFeedbacks(); 

  return null
};