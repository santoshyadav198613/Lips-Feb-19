import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder,
  FormControl, FormArray, Validators
} from '@angular/forms';
import { CustomValidator } from '../../customValidator/custom.validator.service';



@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  isChanged = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(20)],
        updateOn: 'blur'
      }),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, CustomValidator.mobileNoValidator]),
      address: this.fb.group({
        addressLine1: new FormControl('', [Validators.required]),
        addressLine2: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        pin: new FormControl('', [Validators.required])
      }),
      previousHistory: this.fb.array([
        this.buildForm()
      ])
    }, { validators: [CustomValidator.validateDateRange], updateOn: 'blur' });

    // subscribe to from changes
    this.registrationForm.valueChanges.subscribe((data) => {
      console.log(data);
      this.isChanged = true;
    });

    this.bindData();
  }

  bindData() {
    this.registrationForm.patchValue({
      name: 'Test Patient1',
      age: 10,
      email: 'test1@gmail.com',
      address: {
        addressLine1: 'Pune',
        addressLine2: 'Pune',
        city: 'Pune',
        pin: '400080'
      },
      previousHistory: [
        {
          hospitalizedAt: 'Test',
          fromDate: '12-Dec-2012',
          toDate: '15-Dec-2012',
          desease: 'NA'
        }
      ]
    })
  }

  private buildForm(): any {
    return this.fb.group({
      hospitalizedAt: new FormControl('', [Validators.required]),
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl(''),
      desease: new FormControl('', [Validators.required]),
    });
  }

  addHistory() {
    const historyControl = this.registrationForm['controls'].previousHistory as FormArray;
    historyControl.push(this.buildForm());
  }

  removeHistory(i: number) {
    const historyControl = this.registrationForm['controls'].previousHistory as FormArray;
    historyControl.removeAt(i);
  }

  saveData() {
    console.log(this.registrationForm.getRawValue());
    this.registrationForm.reset({
      name: 'Test Patient1',
      age: 10,
      email: 'test1@gmail.com',
      mobile: '',
      address: {
        addressLine1: 'Pune',
        addressLine2: 'Pune',
        city: 'Pune',
        pin: '400080'
      },
      previousHistory: [
        {
          hospitalizedAt: 'Test',
          fromDate: '12-Dec-2012',
          toDate: '15-Dec-2012',
          desease: 'NA'
        }
      ]
    });
    this.isChanged = false;
  }


}
