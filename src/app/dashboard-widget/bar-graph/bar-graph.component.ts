import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'cdk-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      setTimeout(() => {
          this.createBarGraph();
      },500)
  }

  createBarGraph() {
      new Chart('dash-bar-graph', {
            type: 'bar',
            data: {
                labels: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Aug"],
                datasets: [
                    {
                        backgroundColor: '#008683',
                        borderColor: '#008683',
                        data: [70, 88, 77, 93, 82, 100, 70, 67,78,99],
                        label: 'Gare',
                        fill: 'false'
                    },
                    {
                        backgroundColor: '#2b9861',
                        borderColor: '#2b9861',
                        data: [80, 88, 67, 95, 76, 60, 67, 95,95,66],
                        label: 'Gare',
                        fill: 'false'
                    },
                    {
                        backgroundColor: '#0d497e',
                        borderColor: '#0d497e',
                        data: [60, 88, 70, 67, 27, 83, 78, 88,95,60],
                        label: 'Gare',
                        fill: 'false'
                    },
                    {
                        backgroundColor: '#006a81',
                        borderColor: '#006a81',
                        data: [75, 55, 55, 95, 66, 88, 70, 78,77,100],
                        label: 'Gare',
                        fill: 'false'
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                elements : {
                    line: {
                        tension: 0.000001
                    }
                },
                maintainAspectRatio: false,
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                title: {
                    display: true,
                    text: 'GRAFICO GARE'
                }
            }
        })
  }
}
