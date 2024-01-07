import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimsrightsComponent } from './victimsrights.component';

describe('VictimsrightsComponent', () => {
  let component: VictimsrightsComponent;
  let fixture: ComponentFixture<VictimsrightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VictimsrightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VictimsrightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
