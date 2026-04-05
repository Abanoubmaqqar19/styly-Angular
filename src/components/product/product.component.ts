import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../../services/courseService/course.service';
import { Course } from '../../models/course';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../../../pipes/discount.pipe';
import { DisableAfterClickDirective } from '../../directive/disable-after-click.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() selectedCatId: number | string = '';
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  // getter to access products from service
  get products() {
    return this.courses;
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

  // navigate to product detail
  viewProduct(prodId: number) {
    this.router.navigate(['product', prodId], {
      relativeTo: this.router.routerState.root.firstChild,
    });
  }
}
