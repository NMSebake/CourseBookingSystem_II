import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseList } from './course-list/course-list';
import { CourseDetail } from './course-detail/course-detail';

@Component({
  selector: 'app-root',
  imports: [CourseList, CourseDetail, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('CourseBookingSystem_II');
}
