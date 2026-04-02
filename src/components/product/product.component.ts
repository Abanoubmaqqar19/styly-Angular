import { Component, Input } from '@angular/core';
import { ProductServiceService } from '../../services/productService/product-service.service';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../../../pipes/discount.pipe';
import { DisableAfterClickDirective } from '../../directive/disable-after-click.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() selectedCatId: number | string = '';

  constructor(private productService: ProductServiceService) {}

  // getter to access products from service
  get products() {
    return this.productService.products;
  }

  // filter
  get filteredProducts() {
    if (!this.selectedCatId || this.selectedCatId === '') {
      return this.products;
    }
    return this.products.filter((p) => p.catId == +this.selectedCatId);
  }

  // decrease qty
  decreaseQuantity(qInputByUser: number, prodId: number) {
    let product = this.products.find((prod) => prod.id === prodId);
    if (!product) return;

    const q = Math.min(qInputByUser, product.avilableQuantity);
    product.avilableQuantity -= q;
  }
}
