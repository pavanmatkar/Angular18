import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface MenuItem {
label: string;
roles: string[]; // roles that can see the menu item
}

@Component({
  selector: 'app-role-based-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './role-based-menu.component.html',
  styleUrl: './role-based-menu.component.css',
})
export class RoleBasedMenuComponent {
  role = 'guest';
  menuItems: MenuItem[] = [
    { label: 'Home', roles: ['guest', 'admin'] },
    { label: 'Profile', roles: ['guest', 'admin'] },
    { label: 'Manage Users', roles: ['admin'] },
    { label: 'Settings', roles: ['admin'] },
  ];

  visibleMenu = signal<MenuItem[]>(
    this.menuItems.filter((item) => item.roles.includes(this.role))
  );

  updateVisibleMenu() {
    this.visibleMenu.set(
      this.menuItems.filter((item) => item.roles.includes(this.role))
    );
  }
}
