import { TestBed } from '@angular/core/testing';

import { ProductdeatailService } from './productdeatail.service';

describe('ProductdeatailService', () => {
  let service: ProductdeatailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductdeatailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
