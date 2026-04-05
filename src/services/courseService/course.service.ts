import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'https://69d268805043d95be971da27.mockapi.io/product';

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCoursesByCategoryID(catID: number | string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}?catId=${catID}`);
  }

  getCourseByID(cID: number | string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${cID}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }
}
