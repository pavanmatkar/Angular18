import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
// import { NgChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js'; // Import registrables

// ✅ Register all built-in chart types, elements, and scales
Chart.register(...registerables);
@Component({
  selector: 'app-sales-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],  //NgChartsModule is outdated now we use BaseChartDirective
  templateUrl: './sales-chart.component.html',
  styleUrl: './sales-chart.component.css'
})
export class SalesChartComponent {

    // Mock monthly sales data
  public chartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Monthly Sales ($)',
        data: [12000, 15000, 11000, 18000, 20000, 25000, 30000, 27000, 22000, 24000, 26000, 31000],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  public chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: '📊 Monthly Sales Overview'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => '$' + value
        }
      }
    }
  };

  public chartType: 'bar' = 'bar';

}
