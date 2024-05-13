import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestHomeComponent } from './dest-home.component';

describe('DestHomeComponent', () => {
  let component: DestHomeComponent;
  let fixture: ComponentFixture<DestHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
