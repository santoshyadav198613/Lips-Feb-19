import { Component } from '@angular/core';
import { IPatient } from "./patient/patient";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `Hello
  // {{title}}`,
  styleUrls: ['./app.component.css'],
  // styles: ['h1 { color: steelblue }']
})
export class AppComponent {
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
}
