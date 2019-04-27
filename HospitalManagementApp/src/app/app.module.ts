import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { InsuranceProviderComponent } from './hospital-info/insurance-provider/insurance-provider.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsListComponent } from './doctors/doctors-list/doctors-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { PatientComponent } from './patient/patient.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { ModePipe } from './hospital-info/mode.pipe';
import { SearchPipe } from './hospital-info/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HospitalInfoComponent,
    InsuranceProviderComponent,
    DoctorsComponent,
    DoctorsListComponent,
    DashboardComponent,
    EmpListComponent,
    PatientComponent,
    MainNavComponent,
    PagenotfoundComponent,
    LoginComponent,
    PatientRegistrationComponent,
    ModePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
