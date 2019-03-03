import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { IHospitalInfo } from './hospital';
@Component({
  selector: 'app-hospital-info',
  templateUrl: './hospital-info.component.html',
  styleUrls: ['./hospital-info.component.css']
})
export class HospitalInfoComponent implements OnInit {

  @ViewChild('hospHeader') header: ElementRef;
  hospitalInfo: IHospitalInfo = {
    name: 'Test',
    address: 'Pune',
    specialization: 'Orthopadic'
  };

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.header.nativeElement);
    // this.header.nativeElement.innerText= 'New Header';
    this.renderer.setProperty(this.header.nativeElement, 'innerText', 'New Header');
  }

}
