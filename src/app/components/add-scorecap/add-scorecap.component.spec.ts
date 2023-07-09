import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScorecapComponent } from './add-scorecap.component';

describe('AddScorecapComponent', () => {
  let component: AddScorecapComponent;
  let fixture: ComponentFixture<AddScorecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScorecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScorecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
