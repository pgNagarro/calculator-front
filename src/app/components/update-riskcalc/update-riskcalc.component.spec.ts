import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRiskcalcComponent } from './update-riskcalc.component';

describe('UpdateRiskcalcComponent', () => {
  let component: UpdateRiskcalcComponent;
  let fixture: ComponentFixture<UpdateRiskcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRiskcalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRiskcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
