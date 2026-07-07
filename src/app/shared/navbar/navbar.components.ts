import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.components.html',
  styleUrls: ['./navbar.components.css']
})
export class NavbarComponents {}
