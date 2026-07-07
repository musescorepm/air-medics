import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponents } from './shared/navbar/navbar.components';
import { FooterComponents } from './shared/footer/footer.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponents, FooterComponents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
