import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLangDemoComponent } from './multi-lang-demo.component';

describe('MultiLangDemoComponent', () => {
  let component: MultiLangDemoComponent;
  let fixture: ComponentFixture<MultiLangDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiLangDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiLangDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
