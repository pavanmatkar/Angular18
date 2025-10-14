import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedMenuComponent } from './role-based-menu.component';

describe('RoleBasedMenuComponent', () => {
  let component: RoleBasedMenuComponent;
  let fixture: ComponentFixture<RoleBasedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleBasedMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleBasedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
