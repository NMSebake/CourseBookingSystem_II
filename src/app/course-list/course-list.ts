import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    console.log('Courses List initialised');
  }

  onCourseBooked(course: Course): void {
    console.log('Parent heard about booking: ', course.title);
  }

  onWishlistAdded(course: Course): void {
    console.log('Course added to Wish List: ', course.title);
    this.wishlist.push(course);
  }
}
