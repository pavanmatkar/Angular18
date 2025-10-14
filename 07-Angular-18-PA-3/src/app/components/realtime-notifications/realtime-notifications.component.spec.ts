import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeNotificationsComponent } from './realtime-notifications.component';

describe('RealtimeNotificationsComponent', () => {
  let component: RealtimeNotificationsComponent;
  let fixture: ComponentFixture<RealtimeNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtimeNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
