import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from 'app/auth/auth.module';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LineBasicComponent } from './components/line-basic/line-basic.component';
import { FontColorDirective } from './directives/font-color.directive';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  declarations: [
    IndexComponent,
    LineBasicComponent,
    FontColorDirective,
    StockChartComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    FlexLayoutModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
