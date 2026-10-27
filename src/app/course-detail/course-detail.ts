import { Component } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail {
  course: Course | null = null;

  constructor(private courseService: CourseService) {}

  // loadCourseById(id: number): void {
  //   this.courseService.getCourseById(id).subscribe({
  //     next: (data: Course) => {
  //       this.course = data;
  //     },
  //     error: (err) => {
  //       console.error('Error fetching course by ID: ', err);
  //     },
  //   });

  loadCourseById(courseIdValue: string): void {
    const courseId = Number(courseIdValue);

    console.log('Loading course ID:', courseId);

    this.courseService.getCourseById(courseId).subscribe({
      next: (course) => {
        this.course = course;
      },
      error: (error) => {
        console.error('Error loading course:', error);
      },
    });
  }
}
