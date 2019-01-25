import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListPopupComponent } from './property-list-popup.component';

describe('PropertyListPopupComponent', () => {
  let component: PropertyListPopupComponent;
  let fixture: ComponentFixture<PropertyListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
