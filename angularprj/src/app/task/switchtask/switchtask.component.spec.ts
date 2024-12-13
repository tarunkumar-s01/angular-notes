import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchtaskComponent } from './switchtask.component';

describe('SwitchtaskComponent', () => {
  let component: SwitchtaskComponent;
  let fixture: ComponentFixture<SwitchtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchtaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
