import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  loosers: Array<object>;
  gainers: Array<object>;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getDashboardData();
  }

  getDashboardData(): void {
    this.dashboardService.getDashboardData()
      .subscribe( (data) => {
        console.log(data);
        this.loosers = data['loosers'];
        this.gainers = data['gainers'];
      });
  }
}
