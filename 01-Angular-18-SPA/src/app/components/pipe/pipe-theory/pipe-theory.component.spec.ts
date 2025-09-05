import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTheoryComponent } from './pipe-theory.component';

describe('PipeTheoryComponent', () => {
  let component: PipeTheoryComponent;
  let fixture: ComponentFixture<PipeTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeTheoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
