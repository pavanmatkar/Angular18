import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchUrlsComponent } from './switch-urls.component';

describe('SwitchUrlsComponent', () => {
  let component: SwitchUrlsComponent;
  let fixture: ComponentFixture<SwitchUrlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchUrlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
