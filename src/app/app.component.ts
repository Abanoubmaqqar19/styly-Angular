import { Component } from '@angular/core';


import { FooterComponent } from "../components/footer/footer.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'styly';
}
