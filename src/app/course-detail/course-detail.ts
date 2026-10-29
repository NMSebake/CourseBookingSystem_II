import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  course: Course | null = null;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    console.log('CourseDetail component initialized');

    this.route.paramMap.subscribe((params) => {
      const idStr = params.get('id');

      console.log('Route parameter received:', idStr);

      if (idStr) {
        this.loadCourseById(idStr);
      } else {
        console.error('No course ID found in the route');
      }
    });
  }

  loadCourseById(courseIdValue: string): void {
    const courseId = Number(courseIdValue);

    console.log('Loading course ID:', courseId);

    this.courseService.getCourseById(courseId).subscribe({
      next: (course) => {
        console.log('Course received from backend:', course);

        this.course = course;

        console.log('Course assigned to component:', this.course);

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading course:', error);
      },
    });
  }
}
