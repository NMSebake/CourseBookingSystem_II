import { Routes } from '@angular/router';
import { CourseList } from './course-list/course-list';
import { CourseDetail } from './course-detail/course-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CourseList },
  { path: 'courses/:id', component: CourseDetail },
];
