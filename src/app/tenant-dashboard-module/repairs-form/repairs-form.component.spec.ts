import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsFormComponent } from './repairs-form.component';

describe('RepairsFormComponent', () => {
  let component: RepairsFormComponent;
  let fixture: ComponentFixture<RepairsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
