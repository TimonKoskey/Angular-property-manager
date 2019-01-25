import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFormInputComponent } from './confirm-form-input.component';

describe('ConfirmFormInputComponent', () => {
  let component: ConfirmFormInputComponent;
  let fixture: ComponentFixture<ConfirmFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
