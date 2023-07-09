import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateScorecapComponent } from './update-scorecap.component';

describe('UpdateScorecapComponent', () => {
  let component: UpdateScorecapComponent;
  let fixture: ComponentFixture<UpdateScorecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateScorecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateScorecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
