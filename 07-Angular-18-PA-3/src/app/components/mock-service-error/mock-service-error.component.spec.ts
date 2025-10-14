import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockServiceErrorComponent } from './mock-service-error.component';

describe('MockServiceErrorComponent', () => {
  let component: MockServiceErrorComponent;
  let fixture: ComponentFixture<MockServiceErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockServiceErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockServiceErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
