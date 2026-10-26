// import { Component, OnInit } from '@angular/core';
// import { CourseCard } from '../course-card/course-card';
// import { Course } from '../models/course.model';
// import { CourseService } from '../services/course';

// @Component({
//   selector: 'app-course-list',
//   imports: [CourseCard],
//   templateUrl: './course-list.html',
//   styleUrl: './course-list.css'
// })
// export class CourseList implements OnInit {
//   title: string = 'Available Courses';
//   wishlist: Course[] = [];

//   courses: Course[] = [];

//   constructor(private courseService: CourseService) {}

//   ngOnInit(): void {
//     this.courseService.getCourses().subscribe({
//       next: (data: Course[]) => {
//         console.log('Courses received from backend', data);
//         this.courses = data;
//       },
//       error: (err) => {
//         console.error('Error fetching courses:', err);
//       }
//       // above comma might be the reason
//     });
//   }

//   onCourseBooked(course: Course): void {
//     console.log('Parent heard about booking: ', course.title);
//   }

//   onWishlistAdded(course: Course): void {
//     console.log('Course added to Wish List: ', course.title);
//     this.wishlist.push(course);
//   }
// }
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  title = 'Available Courses';
  wishlist: Course[] = [];
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('CourseList initialized');

    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        console.log('Received courses:', data);
        console.log('Number received:', data.length);

        this.courses = data;

        console.log('Courses assigned:', this.courses.length);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching courses:', err);
      }
    });
  }

  onCourseBooked(course: Course): void {
    console.log('Parent heard about booking:', course.title);
  }

  onWishlistAdded(course: Course): void {
    console.log('Course added to wishlist:', course.title);
    this.wishlist.push(course);
  }
}
