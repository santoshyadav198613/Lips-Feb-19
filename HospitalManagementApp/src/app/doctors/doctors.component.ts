import { Component, OnInit } from '@angular/core';

import { IDoctors } from './doctors';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  selectedDoctor: IDoctors;
  docList: Array<IDoctors> = [
    { name: 'Ram', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2016'), salary: 50000 },
    { name: 'Raj', speciality: 'Surgeon', degree: 'MD', contactNo: '876764764', joinedOn: new Date('13-Nov-2013'), salary: 60000 },
    { name: 'Rohit', speciality: 'Surgeon', degree: 'Dental', contactNo: '876764764', joinedOn: new Date('13-Nov-2012'), salary: 70000 },
    { name: 'Virat', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2018'), salary: 80000 },
    { name: 'Suresh', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2011'), salary: 90000 },
    { name: 'Test', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2010'), salary: 55000 },
  ];

  constructor() { }

  ngOnInit() {
  }

  receiveDoctor(doctor: IDoctors) {
    this.selectedDoctor = doctor;
  }

}
