import { Component, computed, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { effect, inject, signal } from '@angular/core';
import { AuthService } from '../../auth/auth-service.service';


interface MenuItem {
  label: string;
  link?: string;
  submenu?: MenuItem[];
}


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent{
 private sanitizer = inject(DomSanitizer);
  private iconRegistry = inject(MatIconRegistry);
  private auth = inject(AuthService);


     private readonly baseMenu: MenuItem[] = [
    { label: 'Home', link: '/' },
    {
      label: 'Products',
      submenu: [
        { label: 'Cafés', link: '/coffees' },
        { label: 'Acompanhamentos', link: '#' },
      ],
    },
    { label: 'About us', link: '#' },
    { label: 'Contact us', link: '#' },
    {
      label: 'Account',
      submenu: [
        { label: 'Register', link: '/sign-up' },
        { label: 'Login', link: '/sign-in' },
        { label: 'Update', link: '/update-user' },
      ],
    },
  ];

    // computed que reusa baseMenu e altera só o trecho do "Account"
  menuItems = computed<MenuItem[]>(() =>
    this.baseMenu.map(item => {
      if (item.label !== 'Account') return item;

      // quando logado, substitui só este item
      return this.auth.isLoggedIn()
        ? {
            label: 'Logged',
            submenu: [
              { label: 'Orders', link: '/dashboard' },
              { label: 'Logout', link: '/logout' },
            ],
          }
        : item;
    })
  );
  
   constructor() {
    this.registrarIcones();
  }

  private registrarIcones(): void {
    this.iconRegistry.addSvgIcon(
      'menu-icon-registered',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Menu.svg')
    );
  }

  getSubmenu(label: string) {
    const item = this.menuItems().find((i) => i.label === label);
    return item?.submenu ?? [];
  }
}
