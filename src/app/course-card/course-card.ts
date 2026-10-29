import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../models/course.model';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [NgStyle, DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course!: Course;
  @Output() courseBooked = new EventEmitter<Course>();
  @Output() wishlistAdded = new EventEmitter<Course>();
  // Remove later
  // viewDetails(title: string): void {
  //   alert(`View details for ${title}`);
  // }

  constructor(private router: Router) {}
  onCourseBooked(): void {
    this.courseBooked.emit(this.course);
  }

  onAddtoWishList(): void {
    this.wishlistAdded.emit(this.course);
  }

  goToDetails(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }
}
