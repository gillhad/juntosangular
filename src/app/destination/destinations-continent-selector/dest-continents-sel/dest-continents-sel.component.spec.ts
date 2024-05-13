import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestContinentsSelComponent } from './dest-continents-sel.component';

describe('DestContinentsSelComponent', () => {
  let component: DestContinentsSelComponent;
  let fixture: ComponentFixture<DestContinentsSelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestContinentsSelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestContinentsSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
