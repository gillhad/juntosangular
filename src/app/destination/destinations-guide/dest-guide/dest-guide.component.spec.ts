import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestGuideComponent } from './dest-guide.component';

describe('DestGuideComponent', () => {
  let component: DestGuideComponent;
  let fixture: ComponentFixture<DestGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
