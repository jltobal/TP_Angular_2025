import { TestBed } from '@angular/core/testing';

import { CafeCartService } from './cafe-cart.service';

describe('CafeCartService', () => {
  let service: CafeCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafeCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
