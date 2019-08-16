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

  queryParams: object;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
    ) {
      const url = window.location.href;
      this.queryParams = {
        redirectTo: url
      };
    }

  canActivate(): Observable<boolean> | boolean {
    const token: string = localStorage.getItem('token');

    if (!token) {
      this.redirectToLogin();
      return false;
    }

    return this.authService.checkToken()
      .pipe(
        tap((result) => {
          console.log(result);
          if (!result) {
            this.toastr.warning('Token is expired!');
            this.redirectToLogin();
          }
        })
      );
  }

  redirectToLogin(): void {
    this.router.navigate(['/auth/login'], {queryParams: this.queryParams});
  }
}
