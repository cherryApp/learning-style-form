import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() data;
  @Input() set update(num) {
    if (this.barChartData) {
      this.barChartData[0].data = this.data;

      let i = 0;
      this.labels.forEach( (a) => {
        this.barChartLabels[i] = `${a} (${this.data[i]})`;
        i++;
      });
    }
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true,
              padding: 2
          }
      }]
  }

  };

  private labels: Set<any> = new Set();

  public barChartLabels: Label[] = [
    'Cselekvő',
    'Szemlélő',
    'Elméleti',
    'Gyakorlatias'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[];

  constructor() {
    this.labels.add('Cselekvő');
    this.labels.add('Szemlélő');
    this.labels.add('Elméleti');
    this.labels.add('Gyakorlatias');
  }

  ngOnInit(): void {
    this.barChartData = [
      {
        data: this.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.55)',
          'rgba(54, 162, 235, 0.55)',
          'rgba(255, 206, 86, 0.55)',
          'rgba(75, 192, 192, 0.55)',
        ] },
    ];
  }

}
