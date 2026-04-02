import { Injectable } from '@angular/core';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategorServService {
  categories: Category[] = [
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Accessories' },
    { id: 3, name: 'Footwear' },
    { id: 4, name: 'Bags' },
  ];

  constructor() {}
}
