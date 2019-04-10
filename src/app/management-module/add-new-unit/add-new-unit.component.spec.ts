import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUnitComponent } from './add-new-unit.component';

describe('AddNewUnitComponent', () => {
  let component: AddNewUnitComponent;
  let fixture: ComponentFixture<AddNewUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
