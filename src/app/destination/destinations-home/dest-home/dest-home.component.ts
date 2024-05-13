import { Component } from '@angular/core';
import { MainHeaderComponent } from '../../../components/main-header/main-header/main-header.component';
import { FooterComponentComponent } from '../../../components/footer/footer-component/footer-component.component';
import { commonComponents } from '../../../components/exportComponents';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dest-home',
  standalone: true,
  imports: [MainHeaderComponent,commonComponents,RouterModule],
  templateUrl: './dest-home.component.html',
  styleUrl: './dest-home.component.scss'
})
export class DestHomeComponent {

}
