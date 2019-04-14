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
import { AuthGuard } from '../guard/auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'todo', loadChildren: '../todos/todos.module#TodosModule', canLoad: [AuthGuard] },
      { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
      { path: 'doctor', component: DoctorsComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
