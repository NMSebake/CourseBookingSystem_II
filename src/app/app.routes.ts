import { Routes } from '@angular/router';
import { CourseList } from './course-list/course-list';
import { CourseDetail } from './course-detail/course-detail';
import { AboutUs } from './about-us/about-us';
import { Component } from '@angular/core';
import { SignUpForm } from './sign-up-form/sign-up-form';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CourseList },
  { path: 'courses/:id', component: CourseDetail },
  { path: 'about-us', component: AboutUs },
  { path: 'sign-up', component: SignUpForm },
];
