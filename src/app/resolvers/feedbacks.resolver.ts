import { ResolveFn } from '@angular/router';
import { FeedbacksService } from '../services/feedbacks.service'; // Adjust the path as needed
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Feedback } from '../core/components/models/Feedback';
import { CardDisplay } from '../core/components/models/CardDisplay';


export const feedbackResolver: ResolveFn<Observable<CardDisplay[]>> = () => {
  const service = inject(FeedbacksService);
  return service.getFeedbacks().pipe(
    map(feedbacks => feedbacks.map(feedback => ({
      ...feedback,
      imageSrc: feedback.imageSrc || '' // Ensure 'imageSrc' is a string
    }) as CardDisplay))
  );
};