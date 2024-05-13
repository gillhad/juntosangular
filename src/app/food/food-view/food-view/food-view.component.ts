import { Component } from '@angular/core';
import { MainHeaderComponent } from '../../../components/main-header/main-header/main-header.component';
import { FooterComponentComponent } from '../../../components/footer/footer-component/footer-component.component';

@Component({
  selector: 'food-view',
  standalone: true,
  imports: [MainHeaderComponent, FooterComponentComponent],
  templateUrl: './food-view.component.html',
  styleUrl: './food-view.component.scss'
})
export class FoodViewComponent {

}
