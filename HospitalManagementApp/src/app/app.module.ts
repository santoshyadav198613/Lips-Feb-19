import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent, EmpListComponent } from './employee';
import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { InsuranceProviderComponent } from './hospital-info/insurance-provider/insurance-provider.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsListComponent } from './doctors/doctors-list/doctors-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { APP_CONFIG, IAppConfig } from 'core';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptorService } from './customInterceptor/custom.interceptor.service';
import { HoverDirective } from './customDirective/hover.directive';
import { CustomValidatorDirective } from './customDirective/custom-validator.directive';
import { ServiceWorkerModule } from '@angular/service-worker';

const app_config: IAppConfig = {
  apiEndPoint: environment.apiEndPoint
};

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
    SearchPipe,
    HoverDirective,
    CustomValidatorDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: APP_CONFIG, useValue: app_config },
    { provide: HTTP_INTERCEPTORS, useClass:
       CustomInterceptorService, 
       multi: true  }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
