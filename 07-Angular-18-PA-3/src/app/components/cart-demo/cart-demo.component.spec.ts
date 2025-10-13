import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDemoComponent } from './cart-demo.component';

describe('CartDemoComponent', () => {
  let component: CartDemoComponent;
  let fixture: ComponentFixture<CartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
