import { Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule,MatMenuModule,MatIconModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  buttonIn: string = 'Sign In';
  buttonOut: string = 'Sign Out';
  menuItems = [
    { label: 'Home', link: '#' },
    {
      label: 'Products',
      submenu: [
        { label: 'Cafés', link: '#' },
        { label: 'Acompanhamentos', link: '#' },
      ]
    },
    { label: 'About us', link: '#' },
    { label: 'Contact us', link: '#' },
    { label: 'Account', link: '#' }
  ];
  

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'menu-icon-registred',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Menu.svg')
    );
  } 
  getSubmenu(label: string) {
    const item = this.menuItems.find(i => i.label === label);
    return item?.submenu ?? [];
  }
}
