import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseDemoComponent } from './reverse-demo.component';

describe('ReverseDemoComponent', () => {
  let component: ReverseDemoComponent;
  let fixture: ComponentFixture<ReverseDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
