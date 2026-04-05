import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/courseService/course.service';
import { Course } from '../../../models/course';
import { DiscountPipe } from '../../../../pipes/discount.pipe';
import { FormsModule } from '@angular/forms';
import { DisableAfterClickDirective } from '../../../directive/disable-after-click.directive';

@Component({
  selector: 'app-product-detail',
  imports: [DiscountPipe, FormsModule, DisableAfterClickDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.courseService.getCourseByID(id).subscribe((course) => {
      this.product = course;
    });
  }

  decreaseQuantity(qInputByUser: number, prodId: number) {
    if (!this.product) return;
    const q = Math.min(qInputByUser, this.product.avilableQuantity);
    this.product.avilableQuantity -= q;
  }
}
