import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from "../product/product.component";

import { CategorServService } from '../../services/categoresService/categor-serv.service';

@Component({
  selector: 'app-order',
  imports: [FormsModule, ProductComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
  standalone: true,
})
export class OrderComponent {
  //*categories
  categories: any[] = [];

  constructor(private categoryService: CategorServService) {}

  ngOnInit() {
    this.categories = this.categoryService.categories;
  }

  selectedCatId: any;
}
