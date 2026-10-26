import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [
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

  // constructor() {}

  getCourses(): Course[] {
    return this.courses;
  }
}
