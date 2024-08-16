import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Response } from '../response';

import { environment } from 'src/environments/environment';
import { Moments } from '../moments';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  getMoments(): Observable<Response<Moments[]>> {
    return this.http.get<Response<Moments[]>>(this.apiUrl);
  }

  createMoment(formData: FormData): Observable<FormData> {
    console.log(this.apiUrl, 'API network');
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
