import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompanyRiskScoreComponent } from './update-company-risk-score.component';

describe('UpdateCompanyRiskScoreComponent', () => {
  let component: UpdateCompanyRiskScoreComponent;
  let fixture: ComponentFixture<UpdateCompanyRiskScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompanyRiskScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompanyRiskScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
