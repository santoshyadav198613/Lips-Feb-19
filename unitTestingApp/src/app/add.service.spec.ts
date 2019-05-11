import { TestBed } from '@angular/core/testing';

import { AddService } from './add.service';

describe('AddService', () => {
  let service: AddService;
  beforeEach(() => service = new AddService());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add 2 numbers', () => {
    expect(service.add(2,2)).toEqual(4);
  });
});
