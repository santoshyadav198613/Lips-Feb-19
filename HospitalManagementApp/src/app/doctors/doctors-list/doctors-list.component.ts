import {
  Component, ChangeDetectionStrategy, OnInit, Input, SimpleChanges,
  Output, OnChanges, EventEmitter
} from '@angular/core';
import { IDoctors } from '../service/doctors';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorsListComponent implements OnInit, OnChanges {
  @Input() title = '';
  @Input() doctorsList: Array<IDoctors> = [];
  @Output() selectedDoctor = new EventEmitter<IDoctors>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const prop in changes) {
      console.log(prop);
      if (prop === 'title') {

      }
    }
    console.log(changes);
  }

  changeTitle() {
    this.title = 'New Title';
  }

  sendSelectedDoctor(doctor: IDoctors): void {
    this.selectedDoctor.emit(doctor);
  }

}
