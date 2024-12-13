import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleimgComponent } from './multipleimg.component';

describe('MultipleimgComponent', () => {
  let component: MultipleimgComponent;
  let fixture: ComponentFixture<MultipleimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleimgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
