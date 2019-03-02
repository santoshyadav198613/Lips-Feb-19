import {
  Component, OnInit, Input, SimpleChanges,
  Output, OnChanges, EventEmitter
} from '@angular/core';
import { IDoctors } from '../doctors';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit, OnChanges {

  @Input() doctorsList: Array<IDoctors> = [];
  @Output() selectedDoctor = new EventEmitter<IDoctors>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  sendSelectedDoctor(doctor: IDoctors): void {
    this.selectedDoctor.emit(doctor);
  }

}
