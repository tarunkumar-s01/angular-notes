import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteddComponent } from './productedd.component';

describe('ProducteddComponent', () => {
  let component: ProducteddComponent;
  let fixture: ComponentFixture<ProducteddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducteddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducteddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
