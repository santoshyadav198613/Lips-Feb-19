import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { InsuranceProviderComponent } from './hospital-info/insurance-provider/insurance-provider.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsListComponent } from './doctors/doctors-list/doctors-list.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { PatientComponent } from './patient/patient.component';
import { TodosComponent } from './todos/todos.component';
import { TodoInfoComponent } from './todos/todo-info/todo-info.component';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HospitalInfoComponent,
    InsuranceProviderComponent,
    DoctorsComponent,
    DoctorsListComponent,
    HeaderComponent,
    ContentComponent,
    DashboardComponent,
    EmpListComponent,
    PatientComponent,
    TodosComponent,
    TodoInfoComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'todo', component: TodosComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'doctor', component: DoctorsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'patient', component: PatientComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
