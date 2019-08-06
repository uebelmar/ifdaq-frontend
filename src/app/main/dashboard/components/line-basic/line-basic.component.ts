import { Component, OnInit } from '@angular/core';


import * as Highcharts from 'highcharts';

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
export class LineBasicComponent implements OnInit {

  options: Highcharts.Options = {
    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },
    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },
    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    series: 
    [
      {
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        type: 'line'
      },
      {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          type: 'line'
      },
      {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        type: 'line'
      },
      {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        type: 'line'
      },
      {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        type: 'line'
      }
    ],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
  };
  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('container', this.options);
  }

}
