import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindngComponent } from './databindng.component';

describe('DatabindngComponent', () => {
  let component: DatabindngComponent;
  let fixture: ComponentFixture<DatabindngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatabindngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
