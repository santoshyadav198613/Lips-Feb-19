import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      address: this.fb.group({
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl('')
      }),
      previousHistory: this.fb.array([
        this.builForm()
      ])
    })
  }

  private builForm(): any {
    return this.fb.group({
      hospitalizedAt: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      desease: new FormControl(''),
    });
  }

  addHistory() {
    const historyControl = this.registrationForm['controls'].previousHistory as FormArray;
    historyControl.push(this.builForm());
  }

  removeHistory(i: number) {
    const historyControl = this.registrationForm['controls'].previousHistory as FormArray;
    historyControl.removeAt(i);
  }
}
