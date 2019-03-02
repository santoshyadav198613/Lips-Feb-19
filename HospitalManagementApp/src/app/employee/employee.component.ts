import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation : ViewEncapsulation.None,
  host: { class: 'app-employee' }
})
export class EmployeeComponent implements OnInit {
  name = 'Yash';
  city = '';
  isHidden = false;

  constructor() { }
  ngOnInit() {
  }

  getName(): string {
    return this.name;
  }

  changeName(name: any) {
    // console.log(name.value);
    this.name = name.target.value;
    this.city = 'Pune';
  }

  toggleInputs() {
    this.isHidden = !this.isHidden;
  }

}
