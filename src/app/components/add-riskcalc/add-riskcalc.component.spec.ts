import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiskcalcComponent } from './add-riskcalc.component';

describe('AddRiskcalcComponent', () => {
  let component: AddRiskcalcComponent;
  let fixture: ComponentFixture<AddRiskcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRiskcalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRiskcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
