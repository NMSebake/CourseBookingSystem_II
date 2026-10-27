import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  title: string = 'Available Courses';
  wishlist: Course[] = [];

  courses: Course[] = [];
  errorMessage = '';
  isLoading = false;
  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
        this.isLoading = false;

        // Explicitly check this component and its child views.
        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('Error loading courses:', error);

        this.errorMessage = 'Unable to load courses. Please try again later.';

        this.isLoading = false;

        this.cdr.detectChanges();
      },
    });
  }

  onCourseBooked(course: Course): void {
    console.log('Parent heard about booking: ', course.title);
  }

  onWishlistAdded(course: Course): void {
    console.log('Course added to Wish List: ', course.title);
    this.wishlist.push(course);
  }
}
