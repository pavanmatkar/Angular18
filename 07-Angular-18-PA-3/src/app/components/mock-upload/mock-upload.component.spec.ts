import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockUploadComponent } from './mock-upload.component';

describe('MockUploadComponent', () => {
  let component: MockUploadComponent;
  let fixture: ComponentFixture<MockUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
