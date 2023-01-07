import { TestBed } from '@angular/core/testing';

import { Categoryservice } from './categoryservice.service';

describe('CategoryserviceService', () => {
  let service: Categoryservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Categoryservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
