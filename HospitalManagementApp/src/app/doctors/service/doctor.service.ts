import { Injectable } from '@angular/core';
import { IDoctors } from './doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  docList: Array<IDoctors> = [];

  constructor() { }

  getDoctorList(): Array<IDoctors> {
    return this.docList = [
      { name: 'Ram', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2016'), salary: 50000 },
      { name: 'Raj', speciality: 'Surgeon', degree: 'MD', contactNo: '876764764', joinedOn: new Date('13-Nov-2013'), salary: 60000 },
      { name: 'Rohit', speciality: 'Surgeon', degree: 'Dental', contactNo: '876764764', joinedOn: new Date('13-Nov-2012'), salary: 70000 },
      { name: 'Virat', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2018'), salary: 80000 },
      { name: 'Suresh', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2011'), salary: 90000 },
      { name: 'Test', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2010'), salary: 55000 },
    ];

  }

  addDoctor() {
    return this.docList = [...this.docList,
    { name: 'Test1', speciality: 'Surgeon', degree: 'MBBS', contactNo: '876764764', joinedOn: new Date('13-Nov-2010'), salary: 55000 }
    ];
  }


}
