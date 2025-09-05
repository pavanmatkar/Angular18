import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApi2Component } from './post-api-2.component';

describe('PostApi2Component', () => {
  let component: PostApi2Component;
  let fixture: ComponentFixture<PostApi2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostApi2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
