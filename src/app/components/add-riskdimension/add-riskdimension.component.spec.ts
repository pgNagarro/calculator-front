import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiskdimensionComponent } from './add-riskdimension.component';

describe('AddRiskdimensionComponent', () => {
  let component: AddRiskdimensionComponent;
  let fixture: ComponentFixture<AddRiskdimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRiskdimensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRiskdimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
