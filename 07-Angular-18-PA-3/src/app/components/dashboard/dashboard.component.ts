import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ChartComponent } from '../chart/chart.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild('dynamicContainer', {read: ViewContainerRef}) container!: ViewContainerRef;
  async load(type: 'chart' | 'table'){
    this.container.clear();

    if (type === 'chart'){
      const {ChartComponent} = await import('../chart/chart.component');
      this.container.createComponent(ChartComponent);
    } else{
      const { TableComponent } = await import('../table/table.component');
      this.container.createComponent(TableComponent);
    }
  }
}
