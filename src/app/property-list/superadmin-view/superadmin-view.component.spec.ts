import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminViewComponent } from './superadmin-view.component';

describe('SuperadminViewComponent', () => {
  let component: SuperadminViewComponent;
  let fixture: ComponentFixture<SuperadminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
