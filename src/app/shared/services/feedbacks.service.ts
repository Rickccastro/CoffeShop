import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CardDisplay } from '../../core/components/models/CardDisplay';
import { Feedback } from '../../core/components/models/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
  httpClient = inject(HttpClient);

  getFeedbacks(): Observable<Partial<CardDisplay>[]> {
    return this.httpClient.get<Feedback[]>('http://localhost:3000/feedbacks').pipe(
      map(feedbacks =>
        feedbacks.map(fb => ({
          id: fb.id,
          title: fb.usuario.nome,
          subtitle: fb.usuario.cargo,
          secondSubtitle: fb.descricao,
          imageSrc: fb.usuario.imageSrc,
          imageAlt: fb.usuario.imageAlt,
        }))
      )
    );
  }  
}
