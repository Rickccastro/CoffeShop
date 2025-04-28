import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent} from "./core/components/footer/footer.component";
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Coffe-Shop';
}
