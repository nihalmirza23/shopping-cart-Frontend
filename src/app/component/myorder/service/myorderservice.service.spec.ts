import { TestBed } from '@angular/core/testing';

import { MyorderServiceService } from './myorderservice.service';

describe('MyorderserviceService', () => {
  let service: MyorderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyorderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
