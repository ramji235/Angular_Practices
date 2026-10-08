import { TestBed } from '@angular/core/testing';

import { Utilityservice } from './utilityservice';

describe('Utilityservice', () => {
  let service: Utilityservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Utilityservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
