import {
  Component, OnInit, DoCheck, ViewChild,
  AfterViewInit, ViewChildren, QueryList
} from '@angular/core';

import { DoctorService } from "./service/doctor.service";
import { HeaderComponent } from '../header/header.component';
import { IDoctors } from './service/doctors';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
  providers: [DoctorService]
})
export class DoctorsComponent implements OnInit, DoCheck, AfterViewInit {

  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildren: QueryList<HeaderComponent>;
  selectedDoctor: IDoctors;
  docList: Array<IDoctors> = [];

  constructor(private docService: DoctorService) { }

  ngOnInit() {
    this.docList = this.docService.getDoctorList();
  }

  addDoctor() {
    this.docList = this.docService.addDoctor(
      { name: 'Test1', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2010'), salary: 55000 }
    );

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
