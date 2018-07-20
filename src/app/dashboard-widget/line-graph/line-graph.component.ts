import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'cdk-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
        this.createLineChart();
    },500)
  }
  createLineChart() {
      new Chart('line-graph', {
                type: 'line',
                data: {
                    labels: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto","Settembre",'Ottobre','Novembre','Dicembre'],
                    datasets: [{
                        backgroundColor: 'rgba(42, 110, 174, 0.6)',
                        borderColor: 'rgba(42, 110, 174,.9)',
                        data: [76, 88, 99, 122, 130, 140, 150, 142, 150, 142, 130, 110],
                        label: 'Gare',
                        fill: 'start'
                    }]
                },
                options: {
                    elements : {
                        line: {
                            tension: 0.000001
                        }
                    },
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: false,
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    },
                    title: {
                        display: true,
                        text: 'Gare 2017'
                    }
                }
        })
  }

}
