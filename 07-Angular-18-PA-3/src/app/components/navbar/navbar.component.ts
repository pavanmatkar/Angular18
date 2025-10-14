import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // reactive signal to track scroll
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled.set(scrollTop > 50); // change style after 50px scroll
  }
}
