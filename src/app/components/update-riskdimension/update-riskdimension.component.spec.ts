import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRiskdimensionComponent } from './update-riskdimension.component';

describe('UpdateRiskdimensionComponent', () => {
  let component: UpdateRiskdimensionComponent;
  let fixture: ComponentFixture<UpdateRiskdimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRiskdimensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRiskdimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
