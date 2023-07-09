import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiskscorelevelComponent } from './add-riskscorelevel.component';

describe('AddRiskscorelevelComponent', () => {
  let component: AddRiskscorelevelComponent;
  let fixture: ComponentFixture<AddRiskscorelevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRiskscorelevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRiskscorelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
