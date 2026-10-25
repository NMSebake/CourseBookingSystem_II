import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  title: string = 'Available Courses';
  wishlist: any[] = [];
  courses: Course[] = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      description: 'Learn the basics of HTML, CSS and JavaScript',
      price: 49,
      date: '2026-11-01',
      soldOut: true,
      onSale: true,
      img: 'Angular.png',
    },
    {
      id: 2,
      title: 'Python for Beginners',
      description: 'Learn Python programming and build simple applications',
      price: 699.0,
      date: '2026-11-15',
      soldOut: false,
      onSale: false,
      img: 'python.png',
    },
    {
      id: 3,
      title: 'Data Science Essentials',
      description: 'Explore data analysis, statistics, and visualisation',
      price: 999.0,
      date: '2026-11-10',
      soldOut: false,
      onSale: false,
      img: 'data_science.png',
    },
    {
      id: 4,
      title: 'Introduction to SQL',
      description: 'Learn to query, manage and analyse data using SQL.',
      price: 45,
      date: '2026-11-15',
      soldOut: false,
      onSale: true,
      img: 'SQL.png',
    },
  ];

  ngOnInit(): void {
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
