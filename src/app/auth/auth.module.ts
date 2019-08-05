import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes = [
  {
      path : 'auth/login',
      component: LoginComponent
  },
];

const guards = [AuthGuard];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ToastrModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    ... guards
  ],
})
export class AuthModule { }
