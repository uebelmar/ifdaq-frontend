import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  url: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
    ) {
      this.url = window.location.href;
    }

  canActivate(): Observable<boolean> | boolean {
    const token: string = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    return this.authService.checkToken()
      .pipe(
        tap((result) => {
          if (!result) {
            this.toastr.warning('Token is expired!');
            const queryParams = {
              redirectTo: this.url
            };

            this.router.navigate(['/auth/login'], {queryParams});
          }
        })
      );
  }
}
