import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {DashboardService} from '../../services/dashboard.service';

declare var require: any;
const boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const more = require('highcharts/highcharts-more');

boost(Highcharts);
noData(Highcharts);
more(Highcharts);
noData(Highcharts);


@Component({
    selector: 'app-line-basic',
    templateUrl: './line-basic.component.html',
    styleUrls: ['./line-basic.component.scss']
})
export class LineBasicComponent implements AfterViewInit {
    @ViewChild('lineBasic', {static: false}) container: ElementRef;
    datas: Array<object>;

    getOptions(): object {

        return {

            chart: {
                type: 'line'
            },
            title: {
                text: 'Top 5 Models'
            },
            xAxis: {
                categories: this.datas['dates']
            },
            yAxis: {
                title: {
                    text: 'Points'
                }
            },
            plotOptions: {
                line: {
                    marker: {
                        enabled: false
                    },
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                }
            },
            series: this.datas['top5ModelsHistory'],

        };
    }

    constructor(private dashboardService: DashboardService) {
    }


    getDashboardData(): void {
        this.dashboardService.getDashboardData()
            .subscribe((data) => {
                this.datas = data['models']['chart'];
                Highcharts.chart(this.container.nativeElement, this.getOptions());

            });
    }

    ngAfterViewInit(): void {
        this.getDashboardData();
    }

}
