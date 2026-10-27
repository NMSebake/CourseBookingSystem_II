import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: Course[] = [];

  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses`).pipe(
      catchError((error) => {
        console.error('Error retrieving courses:', error);
        return throwError(() => error);
      }),
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`).pipe(
      catchError((error) => {
        console.error('Error retrieving course:', error);

        return throwError(() => error);
      }),
    );
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/courses`, course).pipe(
      catchError((error) => {
        console.error('Error adding course:', error);

        return throwError(() => error);
      }),
    );
  }
}
