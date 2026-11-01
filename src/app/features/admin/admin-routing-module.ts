import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from '../../app';
import { AddNewCourse } from '../add-new-course/add-new-course';
import { StudentList } from './student-list/student-list';

const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      { path: 'app-add-new-course', component: AddNewCourse },
      { path: 'app-student-list', component: StudentList },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), StudentList],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
