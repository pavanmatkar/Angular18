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
  template: `
    <div class="p-8 4xl:p-16 bg-gray-100 min-h-screen w-full">
      <!-- Cards Row -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 4xl:grid-cols-4 gap-6 4xl:gap-10 mb-6 4xl:mb-10"
      >
        <div
          class="bg-blue-500 rounded-xl 4xl:rounded-2xl p-6 4xl:p-10 text-white w-full sm:w-[300px] md:w-[350px] lg:w-[400px] 4xl:w-[480px]"
        >
          <div class="text-lg 4xl:text-2xl font-semibold">Total Income</div>
          <div class="text-3xl 4xl:text-5xl font-bold mt-2 4xl:mt-4">
            $579,000
          </div>
          <div class="mt-2 4xl:mt-4 text-xs 4xl:text-base opacity-80">
            Saved 25%
          </div>
        </div>

        <div
          class="bg-sky-400 rounded-xl 4xl:rounded-2xl p-6 4xl:p-10 text-white w-full sm:w-[300px] md:w-[350px] lg:w-[400px] 4xl:w-[480px]"
        >
          <div class="text-lg 4xl:text-2xl font-semibold">Total Expenses</div>
          <div class="text-3xl 4xl:text-5xl font-bold mt-2 4xl:mt-4">
            $79,000
          </div>
          <div class="mt-2 4xl:mt-4 text-xs 4xl:text-base opacity-80">
            Saved 25%
          </div>
        </div>

        <div
          class="bg-purple-400 rounded-xl 4xl:rounded-2xl p-6 4xl:p-10 text-white w-full sm:w-[300px] md:w-[350px] lg:w-[400px] 4xl:w-[480px]"
        >
          <div class="text-lg 4xl:text-2xl font-semibold">Cash on Hand</div>
          <div class="text-3xl 4xl:text-5xl font-bold mt-2 4xl:mt-4">
            $92,000
          </div>
          <div class="mt-2 4xl:mt-4 text-xs 4xl:text-base opacity-80">
            Saved 25%
          </div>
        </div>

        <div
          class="bg-green-300 rounded-xl 4xl:rounded-2xl p-6 4xl:p-10 text-white w-full sm:w-[300px] md:w-[350px] lg:w-[400px] 4xl:w-[480px]"
        >
          <div class="text-lg 4xl:text-2xl font-semibold">
            Net Profit Margin
          </div>
          <div class="text-3xl 4xl:text-5xl font-bold mt-2 4xl:mt-4">
            $179,000
          </div>
          <div class="mt-2 4xl:mt-4 text-xs 4xl:text-base opacity-80">
            Saved 65%
          </div>
        </div>
      </div>

      <!-- Charts and Budget Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 4xl:gap-10">
        <!-- Left: AP & AR Chart -->
        <div class="bg-white rounded-xl 4xl:rounded-2xl p-6 4xl:p-10 shadow-sm">
          <!-- Header section -->
          <div class="mb-4 4xl:mb-6">
            <h2 class="text-lg 4xl:text-3xl font-semibold text-black">
              AP and AR Balance
            </h2>
            <p class="text-sm 4xl:text-xl text-purple-500">Avg. $5,309</p>

            <!-- Dropdowns stacked below heading -->
            <div class="flex gap-2 4xl:gap-4 mt-3 4xl:mt-6">
              <select
                class="px-3 4xl:px-5 py-1 4xl:py-2 rounded-md border border-gray-200 text-sm 4xl:text-lg text-gray-700"
              >
                <option>Monthly</option>
                <option>Weekly</option>
              </select>

              <select
                class="px-3 4xl:px-5 py-1 4xl:py-2 rounded-md border border-gray-200 text-sm 4xl:text-lg text-gray-700"
              >
                <option>Last Year</option>
                <option>This Year</option>
              </select>
            </div>
          </div>

          <canvas
            baseChart
            [data]="chartData"
            [options]="chartOptions"
            [type]="chartType"
            class="w-full 4xl:h-[500px]"
          ></canvas>
        </div>

        <!-- Right: Budget Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 4xl:gap-10">
          <!-- % of Income Budget -->
          <div
            class="bg-white rounded-xl 4xl:rounded-2xl p-6 4xl:p-10 shadow-sm flex flex-col items-center justify-center"
          >
            <div
              class="text-gray-700 font-semibold mb-2 4xl:mb-4 text-base 4xl:text-2xl"
            >
              % of Income Budget
            </div>

            <div
              class="relative w-24 h-24 4xl:w-40 4xl:h-40 mb-2 4xl:mb-4 flex items-center justify-center"
            >
              <svg class="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e5e7eb"
                  stroke-width="8"
                />
                <defs>
                  <linearGradient
                    id="incomeGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#3b82f6" />
                    <stop offset="100%" stop-color="#10b981" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#incomeGradient)"
                  stroke-width="8"
                  stroke-dasharray="251"
                  stroke-dashoffset="82"
                  stroke-linecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>

              <div
                class="absolute inset-0 flex flex-col items-center justify-center text-xl 4xl:text-3xl font-bold text-sky-500"
              >
                67%
                <p class="text-xs 4xl:text-lg text-gray-400 font-medium">
                  Budget
                </p>
              </div>
            </div>

            <a href="#" class="text-sky-500 text-xs 4xl:text-lg underline"
              >View Full Report</a
            >
          </div>

          <!-- % of Expenses Budget -->
          <div
            class="bg-white rounded-xl 4xl:rounded-2xl p-6 4xl:p-10 shadow-sm flex flex-col items-center justify-center"
          >
            <div
              class="text-gray-700 font-semibold mb-2 4xl:mb-4 text-base 4xl:text-2xl"
            >
              % of Expenses Budget
            </div>

            <div
              class="relative w-24 h-24 4xl:w-40 4xl:h-40 mb-2 4xl:mb-4 flex items-center justify-center"
            >
              <svg class="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e5e7eb"
                  stroke-width="8"
                />
                <defs>
                  <linearGradient
                    id="expensesGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#3b82f6" />
                    <stop offset="100%" stop-color="#10b981" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#expensesGradient)"
                  stroke-width="8"
                  stroke-dasharray="251"
                  stroke-dashoffset="130"
                  stroke-linecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>

              <div
                class="absolute inset-0 flex flex-col items-center justify-center text-xl 4xl:text-3xl font-bold text-emerald-500"
              >
                48%
                <p class="text-xs 4xl:text-lg text-gray-400 font-medium">
                  Profit
                </p>
              </div>
            </div>

            <a href="#" class="text-sky-500 text-xs 4xl:text-lg underline"
              >View Full Report</a
            >
          </div>
        </div>
      </div>
    </div>
  `,
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
      },
    ],
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
      },
    },
    plugins: {
      legend: { display: false },
    },
  };
}
