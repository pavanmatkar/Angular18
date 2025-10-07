import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboard1Component } from './admin-dashboard1.component';

describe('AdminDashboard1Component', () => {
  let component: AdminDashboard1Component;
  let fixture: ComponentFixture<AdminDashboard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
