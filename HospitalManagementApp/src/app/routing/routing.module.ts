import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodosComponent } from '../todos/todos.component';
import { EmployeeComponent } from '../employee/employee.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PatientComponent } from '../patient/patient.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'todo', component: TodosComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'doctor', component: DoctorsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patient', component: PatientComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
