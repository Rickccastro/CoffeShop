import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Feedback } from '../core/models/Feedback';
import { CardDisplay } from '../core/models/CardDisplay';
import { FeedbacksService } from '../shared/services/feedbacks.service';


export const feedbackResolver: ResolveFn<Observable<CardDisplay[]>> = () => {
  const service = inject(FeedbacksService);
  return service.getFeedbacks().pipe(
    map(feedbacks => feedbacks.map(feedback => ({
      ...feedback,
      imageSrc: feedback.imageSrc || '' // Ensure 'imageSrc' is a string
    }) as CardDisplay))
  );
};