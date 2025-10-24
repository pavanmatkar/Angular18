import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts'; //NgChartsModule is outdated now we use BaseChartDirective
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

// ✅ Register all built-in chart types, elements, and scales
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // Dual axis bar + line combo chart
  public chartType: ChartType = 'bar';

  public chartData: ChartConfiguration['data'] = {
    labels: ['Jan 01', '03 Jan', '05 Jan', '07 Jan', '09 Jan', '11 Jan'],
    datasets: [
      {
        type: 'bar' as const,
        label: 'AP Balance',
        data: [400, 500, 200, 350, 700, 150],
        backgroundColor: 'rgba(168, 85, 247, 0.4)',
        borderRadius: 6,
        borderSkipped: false,
        yAxisID: 'y',
      },
      {
        type: 'line' as const,
        label: 'AR Balance',
        data: [30, 45, 35, 25, 40, 20],
        borderColor: '#a855f7',
        backgroundColor: '#a855f7',
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#a855f7',
        yAxisID: 'y1',
      }
    ]
  };

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: { drawOnChartArea: false },
        ticks: { color: '#888' },
      },
      y1: {
        position: 'right',
        beginAtZero: true,
        grid: { drawOnChartArea: false, display: false },
        ticks: { color: '#888' },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#888' },
      }
    },
    plugins: {
      legend: { display: false },
    }
  };
}
