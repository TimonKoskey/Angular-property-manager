import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminisratorDetailsComponent } from './adminisrator-details.component';

describe('AdminisratorDetailsComponent', () => {
  let component: AdminisratorDetailsComponent;
  let fixture: ComponentFixture<AdminisratorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminisratorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminisratorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
