import { TestBed } from '@angular/core/testing';

import { Counterservice } from './counterservice';

describe('Counterservice', () => {
  let service: Counterservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Counterservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
