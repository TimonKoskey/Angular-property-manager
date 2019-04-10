import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminisratorsListComponent } from './adminisrators-list.component';

describe('AdminisratorsListComponent', () => {
  let component: AdminisratorsListComponent;
  let fixture: ComponentFixture<AdminisratorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminisratorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminisratorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
