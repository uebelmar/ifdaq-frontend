import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public login(credentials): Observable<any> {
    return this.http.get<LoginSuccess>(`${this.apiUrl}login`, credentials)
      .pipe(
        tap((response: LoginSuccess) => {
          console.log(response);
          const token = response.token;
          if (token) {
            localStorage.setItem('token', token);
            const user = {
              username: response.username,
              email: response.email
            };
            localStorage.setItem('user', JSON.stringify(user));
          }
        })
      );
  }

  public logout(): Observable<any> {
    return this.http.get(`${this.apiUrl}logout`)
      .pipe(
        tap((response) => {
          console.log(response);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        })
      );
  }
}

interface LoginSuccess {
  username: string;
  email: string;
  token: string;
  type: any;
  success: true;
}
