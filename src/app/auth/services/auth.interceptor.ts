import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import {map, tap, catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
// import { SpinnerService } from '../shared/services/spinner.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(
    private toaster: ToastrService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    if (token) {
      request = request.clone({headers: request.headers.set('X-Api-Key', token)});
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
      catchError((err) => {
        if (err.url && err.url.includes('/login')){  
          this.toaster.error('Invalid email or password!');
        }
        return throwError(err);
      })
    );
  }
}
