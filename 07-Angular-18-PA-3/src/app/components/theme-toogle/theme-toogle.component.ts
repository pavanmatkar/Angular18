import { Component, OnInit } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-theme-toogle',
  standalone: true,
  imports: [NgIf],
  templateUrl: './theme-toogle.component.html',
  styleUrl: './theme-toogle.component.css'
})
export class ThemeToogleComponent implements OnInit{
  isDarkMode = false;

  ngOnInit(): void {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark'){
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  toggleTheme(): void{
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode){
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  private enableDarkMode(): void {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    this.isDarkMode = true;
  }

  private enableLightMode(): void {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    this.isDarkMode = false;
  }
}
