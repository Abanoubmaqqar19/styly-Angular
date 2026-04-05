import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../../../components/product/product.component';
import { CategoryService } from '../../../services/categoryService/category.service';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: true,
})
export class ProductListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  selectedCatId: any;
}
