import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Utilityservice } from './utilityservice';

describe('Utilityservice', () => {
  let component: Utilityservice;
  let fixture: ComponentFixture<Utilityservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Utilityservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Utilityservice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
