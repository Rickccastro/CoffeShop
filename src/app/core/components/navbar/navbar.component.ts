import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { computed, effect, inject, signal } from '@angular/core';
import { AuthService } from '../../auth/auth-service.service';

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
export class NavbarComponent implements OnInit {
  authService = inject(AuthService);
  isLoggedIn = this.authService.isLoggedIn;
  private sanitizer = inject(DomSanitizer);
  private iconRegistry = inject(MatIconRegistry);

  menuItems = signal([
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
  ]);

  ngOnInit(): void {
    this.registrarIcones();
    this.inicializarMenuReativo();
  }

  private registrarIcones(): void {
    this.iconRegistry.addSvgIcon(
      'menu-icon-registred',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Menu.svg')
    );
  }

  private inicializarMenuReativo(): void {
    effect(() => {
      if (this.isLoggedIn()) {
        this.menuItems.update((items) =>
          items.map((item) =>
            item.label === 'Account'
              ? {
                  label: 'Logged',
                  submenu: [
                    { label: 'Dashboard', link: '/dashboard' },
                    { label: 'Logout', link: '/logout' },
                  ],
                }
              : item
          )
        );
      }
    });
  }

  getSubmenu(label: string) {
    const item = this.menuItems().find((i) => i.label === label);
    return item?.submenu ?? [];
  }
}
