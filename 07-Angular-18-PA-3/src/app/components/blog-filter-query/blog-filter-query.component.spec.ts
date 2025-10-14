import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFilterQueryComponent } from './blog-filter-query.component';

describe('BlogFilterQueryComponent', () => {
  let component: BlogFilterQueryComponent;
  let fixture: ComponentFixture<BlogFilterQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogFilterQueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogFilterQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
