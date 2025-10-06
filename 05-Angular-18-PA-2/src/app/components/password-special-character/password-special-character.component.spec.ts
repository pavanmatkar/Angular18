import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSpecialCharacterComponent } from './password-special-character.component';

describe('PasswordSpecialCharacterComponent', () => {
  let component: PasswordSpecialCharacterComponent;
  let fixture: ComponentFixture<PasswordSpecialCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordSpecialCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordSpecialCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
