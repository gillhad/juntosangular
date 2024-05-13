import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestMorroccoComponent } from './dest-morrocco.component';

describe('DestMorroccoComponent', () => {
  let component: DestMorroccoComponent;
  let fixture: ComponentFixture<DestMorroccoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestMorroccoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestMorroccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
