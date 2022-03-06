import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewconvobuttonComponent } from './newconvobutton.component';

describe('NewconvobuttonComponent', () => {
  let component: NewconvobuttonComponent;
  let fixture: ComponentFixture<NewconvobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewconvobuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewconvobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
