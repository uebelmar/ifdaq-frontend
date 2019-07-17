import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {map, tap, catchError} from 'rxjs/operators';
// import { SpinnerService } from '../shared/services/spinner.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    if (token) {
      request = request.clone({headers: request.headers.set('Authorization', token)});
    }
    
    request = request.clone({headers: request.headers.set('Accept', 'application/json')});
    request = request.clone({headers: request.headers.set('Access-Control-Allow-Origin', '*')});
    request = request.clone({headers: request.headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')});
    request = request.clone({headers: request.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')});

    return next.handle(request).pipe(
      // map((event: HttpEvent<any>) => {
      //   if (event instanceof HttpResponse) {
      //     const authorization = event['headers'].get('Authorization');
      //     const role = event['headers'].get('User-Role');
      //     if (role) {
      //       localStorage.setItem('User-Role', role);
      //     }
      //     if (authorization) {
      //       localStorage.setItem( 'token', authorization);
      //     }
      //   }
      //   return event['message'] || event;
      // }),
      catchError((err: any) => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          const errorMessage = err.error.message || err.message;
        }
        return of(err);
      })
    );
  }
}
