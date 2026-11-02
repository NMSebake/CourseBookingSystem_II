import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from '../../app';
import { AddNewCourse } from '../add-new-course/add-new-course';
import { StudentList } from './student-list/student-list';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboard,
    children: [
      // { path: 'app-add-new-course', component: AddNewCourse },
      { path: 'new-course', component: AddNewCourse },
      // { path: 'app-student-list', component: StudentList },
      { path: 'students', component: StudentList },
      { path: '', redirectTo: 'students', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), StudentList],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
