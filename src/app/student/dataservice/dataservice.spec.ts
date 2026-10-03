import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dataservice } from './dataservice';

describe('Dataservice', () => {
  let component: Dataservice;
  let fixture: ComponentFixture<Dataservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dataservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dataservice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
