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

  data = {
    loosers: [
      {
        first_name: 'adsgadg addssg',
        last_name: 'adsgadg addssg',
        ifdaq_sum_value: '486.34',
        ifdaq_sum_value_yesterday: '526.34',
        rank: '1252',
      },
      {
        first_name: 'a34dg addssg',
        last_name: 'ads3dfhdg addssg',
        ifdaq_sum_value: '286.34',
        ifdaq_sum_value_yesterday: '26.34',
        rank: '22',
      },
    ]
  };
  
  constructor(
    private http: HttpClient
  ) { }

  public getDashboardData(): Observable<object> {
    return this.http.get(`${this.apiUrl}dashboard`)
      .pipe(
          tap( (response) => {
            console.log(response);
          }),
          map((response: {data: {models: {}}}) => {
            return response.data.models;
          })
      );
  }

  // public getDashboardData(): Observable<object> {
  //   return of(this.data);
  // }
}
