import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-new-course',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-new-course.html',
  styleUrl: './add-new-course.css',
})
export class AddNewCourse implements OnInit {
  addNewCourseForm!: FormGroup;
  courses: Course[] = [];
  submissionSuccess: boolean = false;
  submissionError: string = '';

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    this.addNewCourseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: [
        '',
        [Validators.required, Validators.min(0.1), Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      coursedate: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)],
      ],
      imageUrl: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]+\.png$/)]],
      OnSale: [false],
    });
  }

  get title() {
    return this.addNewCourseForm.get('title');
  }

  get description() {
    return this.addNewCourseForm.get('description');
  }

  get price() {
    return this.addNewCourseForm.get('price');
  }

  get coursedate() {
    return this.addNewCourseForm.get('coursedate');
  }

  get imageUrl() {
    return this.addNewCourseForm.get('imageUrl');
  }

  get OnSale() {
    return this.addNewCourseForm.get('OnSale');
  }

  onSubmitCourse(): void {
    if (this.addNewCourseForm.invalid) {
      return;
    }

    const newCourse: Course = {
      id: 0,
      title: this.addNewCourseForm.value.title,
      description: this.addNewCourseForm.value.description,
      price: this.addNewCourseForm.value.price,
      date: this.addNewCourseForm.value.coursedate,
      img: this.addNewCourseForm.value.imageUrl,
      onSale: this.addNewCourseForm.value.OnSale,
    };

    this.courseService.addCourse(newCourse).subscribe({
      next: (course) => {
        console.log('Course added successfully: ', course);
        this.submissionSuccess = true;
        this.addNewCourseForm.reset();
      },
      error: (err) => {
        console.error('Error adding course: ', err);
        this.submissionError = 'There was an error submitting your course. Please try again';
      },
    });
  }
}
