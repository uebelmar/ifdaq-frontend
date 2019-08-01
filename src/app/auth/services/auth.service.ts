import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';
import {map, tap, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    public login({username, password}): Observable<any> {
        const authorizationData = 'Basic ' + btoa(username + ':' + password);

        const headersOptions = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': authorizationData
        });
        return this.http.get<LoginSuccess>(`${this.apiUrl}login`, {headers: headersOptions})
            .pipe(
                tap((response: LoginSuccess) => {
                    const token = response.data.token;
                    if (token) {
                        localStorage.setItem('token', token);
                        const user = {
                            username: response.data.username,
                            email: response.data.email
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
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                })
            );
    }

    public checkToken(): Observable<boolean> {
        return this.http.get(`${this.apiUrl}user`)
            .pipe(
                map( (response: {data: { token_expires: string}}) => {
                    const expireData = new Date(response.data.token_expires);

                    const now = new Date();
                    const nowIsoDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

                    return expireData > nowIsoDate;
                })
            );
    }
}

interface LoginSuccess {
    data: {
        username: string;
        email: string;
        token: string;
        type: any;
    };
    success: true;
}
