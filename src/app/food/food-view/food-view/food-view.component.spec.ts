import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodViewComponent } from './food-view.component';
import { MainHeaderComponent } from '../../../components/main-header/main-header/main-header.component';

describe('FoodViewComponent', () => {
  let component: FoodViewComponent;
  let fixture: ComponentFixture<FoodViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
