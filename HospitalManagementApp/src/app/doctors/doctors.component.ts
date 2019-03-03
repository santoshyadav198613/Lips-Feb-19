import { Component, OnInit, DoCheck, ViewChild, 
  AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { IDoctors } from './doctors';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit, DoCheck, AfterViewInit {

  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildren: QueryList<HeaderComponent>;

  selectedDoctor: IDoctors;
  docList: Array<IDoctors> = [];

  constructor() { }

  ngOnInit() {
    this.docList = [
      { name: 'Ram', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2016'), salary: 50000 },
      { name: 'Raj', speciality: 'Surgeon', degree: 'MD', contactNo: '876764764', joinedOn: new Date('13-Nov-2013'), salary: 60000 },
      { name: 'Rohit', speciality: 'Surgeon', degree: 'Dental', contactNo: '876764764', joinedOn: new Date('13-Nov-2012'), salary: 70000 },
      { name: 'Virat', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2018'), salary: 80000 },
      { name: 'Suresh', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2011'), salary: 90000 },
      { name: 'Test', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2010'), salary: 55000 },
    ];

  }

  addDoctor() {
    this.docList = [...this.docList,
    { name: 'Test1', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2010'), salary: 55000 }
    ];

    // will modify the object will not work with CD onPush
    // this.docList.push({ name: 'Test1', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2010'), salary: 55000 });
  }
  ngDoCheck(): void {
    console.log('DO check is called');
  }

  ngAfterViewInit(): void {
    console.log(this.headerChildren);
    setTimeout(() => this.headerComponent.header = "Selected Doctor", 0);
    this.headerChildren.forEach((headerComp, i) => {
      console.log(i);
      setTimeout(() => headerComp.header = "Selected Doctor from children", 0);
    });
  }

  receiveDoctor(doctor: IDoctors) {
    this.selectedDoctor = doctor;
  }

}
