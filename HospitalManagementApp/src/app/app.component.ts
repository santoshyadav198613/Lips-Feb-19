import { Component, SkipSelf, OnInit, Inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { IPatient } from './patient/patient';
import { DoctorService } from './doctors/service/doctor.service';
import { ObservableService } from './Observables/observable.service';
import { APP_CONFIG, IAppConfig } from 'core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `Hello
  // {{title}}`,
  styleUrls: ['./app.component.css'],
  // styles: ['h1 { color: steelblue }']
})
export class AppComponent implements OnInit {
  title = 'HospitalManagementApp';
  role = 'Admin';
  patientList: IPatient[] = [
    { name: 'Test', age: 23, number: '5675675', address: 'Pune', symptoms: 'cough' },
    { name: 'Test1', age: 23, number: '5675675', address: 'Pune', symptoms: 'cough' },
    { name: 'Test2', age: 23, number: '5675675', address: 'Pune', symptoms: 'cough' },
    { name: 'Test3', age: 23, number: '5675675', address: 'Pune', symptoms: 'cough' },
    { name: 'Test4', age: 23, number: '5675675', address: 'Pune', symptoms: 'cough' },
    { name: 'Test5', age: 23, number: '5675675', address: 'Pune', symptoms: 'cough' }
  ];

  constructor(@SkipSelf() private docService: DoctorService,
    private obsService: ObservableService,
    private router: Router,
    @Inject(APP_CONFIG) private appConfig: IAppConfig) {
      console.log(appConfig);
     }


  ngOnInit() {
    this.router.events.subscribe((eve) => {
      if (eve => eve instanceof NavigationStart) {
        console.log(eve);
      }
    });

    this.obsService.getName().subscribe(
      data => console.log(data));
  }

  addDoctor() {
    this.docService.addDoctor(
      { name: 'Test2', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2010'), salary: 55000 }
    );
  }

  addName() {
    // console.log(this.obsService.setName('Test User').
    // subscribe(data => console.log(data)));
    this.obsService.setName('Test User');
  }

}
