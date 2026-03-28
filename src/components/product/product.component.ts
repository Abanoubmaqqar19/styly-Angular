import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, NgStyle],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  selectedCatId: any = '';
  products: Product[] = [
    {
      id: 7,
      description: 'White minimalist sneakers',
      brandName: 'StepPro',
      price: 1100,
      avilableQuantity: 20,
      imgUrl:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=80',
      catId: 2,
    },
    {
      id: 8,
      description: 'Gold metal sunglasses',
      brandName: 'LuxVision',
      price: 540,
      avilableQuantity: 28,
      imgUrl:
        'https://images.unsplash.com/photo-1516579486065-6d7d5b87b5af?auto=format&fit=crop&w=500&q=80',
      catId: 3,
    },
    {
      id: 9,
      description: 'Premium cotton scarf',
      brandName: 'SoftWeave',
      price: 220,
      avilableQuantity: 60,
      imgUrl:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80',
      catId: 1,
    },
    {
      id: 10,
      description: 'Sports-fit training pants',
      brandName: 'Athletica',
      price: 480,
      avilableQuantity: 35,
      imgUrl:
        'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80',
      catId: 4,
    },
    {
      id: 11,
      description: 'Women’s stylish handbag',
      brandName: 'GlamLine',
      price: 1350,
      avilableQuantity: 14,
      imgUrl:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80',
      catId: 1,
    },
    {
      id: 12,
      description: 'Limited edition streetwear cap',
      brandName: 'CapWave',
      price: 190,
      avilableQuantity: 50,
      imgUrl:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80',
      catId: 2,
    },
    {
      id: 1,
      description: 'Classic white oversized T-shirt',
      brandName: 'UrbanWear',
      price: 350,
      avilableQuantity: 25,
      imgUrl:
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80',
      catId: 1,
    },
    {
      id: 2,
      description: 'Slim-fit black jeans',
      brandName: 'DenimLine',
      price: 750,
      avilableQuantity: 40,
      imgUrl:
        'https://images.unsplash.com/photo-1583001766624-8a382b1a5a21?auto=format&fit=crop&w=500&q=80',
      catId: 2,
    },
    {
      id: 3,
      description: 'Beige streetwear hoodie',
      brandName: 'StreetFlex',
      price: 980,
      avilableQuantity: 18,
      imgUrl:
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3d3b?auto=format&fit=crop&w=500&q=80',
      catId: 3,
    },
    {
      id: 4,
      description: 'Leather crossbody fashion bag',
      brandName: 'ModeCraft',
      price: 1200,
      avilableQuantity: 10,
      imgUrl:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80',
      catId: 3,
    },
    {
      id: 5,
      description: 'Floral summer dress',
      brandName: 'BellaFashion',
      price: 650,
      avilableQuantity: 32,
      imgUrl:
        'https://images.unsplash.com/photo-1520975918319-70e8d9fd5418?auto=format&fit=crop&w=500&q=80',
      catId: 2,
    },
    {
      id: 6,
      description: 'Men’s lightweight bomber jacket',
      brandName: 'AirMode',
      price: 1450,
      avilableQuantity: 12,
      imgUrl:
        'https://images.unsplash.com/photo-1578932750370-e3f002215a03?auto=format&fit=crop&w=500&q=80',
      catId: 1,
    },
  ];

  cat: any;

  //*function to decrease quantity

  decreaseQuantity(qInputByUser: number, prodId: number) {
    let product = this.products.find((prod) => prod.id === prodId);
    if (!product) {
      alert('test');
      return;
    }
    const quantityToBuy = Math.min(qInputByUser, product.avilableQuantity);
    product.avilableQuantity -= quantityToBuy;

    if (product.avilableQuantity === 0) {
      alert('Product is now out of stock!');
    }
  }

  //*categories
  categories: Category[] = [
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Accessories' },
    { id: 3, name: 'Footwear' },
    { id: 4, name: 'Bags' },
  ];

  //**filter */

  get filteredProducts(): Product[] {
    if (!this.selectedCatId || this.selectedCatId === '') {
      return this.products;
    }
    return this.products.filter((p) => p.catId == +this.selectedCatId);
  }
}
