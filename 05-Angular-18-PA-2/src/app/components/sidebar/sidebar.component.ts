import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  isSidebarVisible  = true;

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize(){
    this.isSidebarVisible = window.innerWidth >= 992; // show only on large screens
  }
}
