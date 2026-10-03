import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Countercomponents } from './countercomponents';

describe('Countercomponents', () => {
  let component: Countercomponents;
  let fixture: ComponentFixture<Countercomponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Countercomponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Countercomponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
