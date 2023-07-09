import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRiskscorelevelComponent } from './update-riskscorelevel.component';

describe('UpdateRiskscorelevelComponent', () => {
  let component: UpdateRiskscorelevelComponent;
  let fixture: ComponentFixture<UpdateRiskscorelevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRiskscorelevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRiskscorelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
