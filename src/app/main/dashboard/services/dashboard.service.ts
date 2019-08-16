import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getDashboardData(): Observable<object> {
    return this.http.get(`${this.apiUrl}dashboard`)
      .pipe(
          map((response: {data: {models: {}, chart: {}}}) => {
            return response.data;
          })
      );
  }

  // public getDashboardData(): Observable<object> {
  //   return of(this.data);
  // }
}
