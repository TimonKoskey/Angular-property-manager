import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyClientsListComponent } from './property-clients-list.component';

describe('PropertyClientsListComponent', () => {
  let component: PropertyClientsListComponent;
  let fixture: ComponentFixture<PropertyClientsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyClientsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
