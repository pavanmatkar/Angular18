import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFocusFormComponent } from './auto-focus-form.component';

describe('AutoFocusFormComponent', () => {
  let component: AutoFocusFormComponent;
  let fixture: ComponentFixture<AutoFocusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoFocusFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoFocusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
