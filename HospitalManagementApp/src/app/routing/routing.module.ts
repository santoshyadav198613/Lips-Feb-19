import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodosComponent } from '../todos/todos.component';
import { EmployeeComponent } from '../employee/employee.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PatientComponent } from '../patient/patient.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { TodoDetailsComponent } from '../todos/todo-details/todo-details.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'doctor', component: DoctorsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
