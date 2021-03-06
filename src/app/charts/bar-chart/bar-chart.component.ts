import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { WeatherService } from 'src/app/layout/weather.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  chart = [];

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast().subscribe((res: { [x: string]: any; }) => {
      let labels = res['labels'];
      let values = res['values'];
      // let temp_max = res['list'].map((res: { main: { temp_max: any; }; }) => res.main.temp_max);
      // let temp_min = res['list'].map((res: { main: { temp_min: any; }; }) => res.main.temp_min);
      // let alldates = res['list'].map((res: { dt: any; }) => res.dt);
      
      // let weatherDates: string[] = []
      // alldates.forEach((res: number) => {
      //   let jsdate = new Date(res * 1000)
      //   weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        
      // })
      
      var ctx = document.getElementById('barChart') as HTMLCanvasElement;
      var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            { 
              label: 'Marks',
              data: values,
              backgroundColor: ["green", "pink", "grey", "olive", "red", "black", "violet", "yellow"],
              borderColor: ["green", "pink", "grey", "olive", "red", "black", "violet", "yellow"],
              fill: false
            },
            // { 
            //   data: temp_min,
            //   backgroundColor: "blue",
            //   borderColor: "blue",
            //   fill: false
            // },
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }, 
          animation: {
            // easing: "easeInSine", 
            duration: 750
          }
        }
      });
      
    })
  }
}