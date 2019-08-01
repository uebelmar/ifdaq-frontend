import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from 'app/auth/auth.module';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
