import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [RouterOutlet],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
  standalone: true,
})
export class OrderComponent {}
