import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from 'app/auth/auth.module';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LineBasicComponent } from './components/line-basic/line-basic.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  declarations: [
    IndexComponent,
    LineBasicComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    FlexLayoutModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
