import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycles } from './life-cycles';

describe('LifeCycles', () => {
  let component: LifeCycles;
  let fixture: ComponentFixture<LifeCycles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
