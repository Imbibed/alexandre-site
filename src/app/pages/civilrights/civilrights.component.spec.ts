import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilrightsComponent } from './civilrights.component';

describe('CivilrightsComponent', () => {
  let component: CivilrightsComponent;
  let fixture: ComponentFixture<CivilrightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivilrightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CivilrightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
