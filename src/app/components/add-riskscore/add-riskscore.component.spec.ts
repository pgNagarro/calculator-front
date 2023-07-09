import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiskscoreComponent } from './add-riskscore.component';

describe('AddRiskscoreComponent', () => {
  let component: AddRiskscoreComponent;
  let fixture: ComponentFixture<AddRiskscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRiskscoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRiskscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
