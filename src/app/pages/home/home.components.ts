import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.components.html',
  styleUrls: ['./home.components.css'],
  imports: [RouterLink]
})
export class HomeComponents {}
