import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickAnalyticsComponent } from './click-analytics.component';

describe('ClickAnalyticsComponent', () => {
  let component: ClickAnalyticsComponent;
  let fixture: ComponentFixture<ClickAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
