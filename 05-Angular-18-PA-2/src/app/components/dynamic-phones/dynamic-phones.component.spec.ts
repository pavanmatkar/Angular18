import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPhonesComponent } from './dynamic-phones.component';

describe('DynamicPhonesComponent', () => {
  let component: DynamicPhonesComponent;
  let fixture: ComponentFixture<DynamicPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicPhonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
