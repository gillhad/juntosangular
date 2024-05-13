import { Component } from '@angular/core';
import { commonComponents } from '../../../../components/exportComponents';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-dest-morrocco',
  standalone: true,
  imports: [commonComponents, RouterModule],
  templateUrl: './dest-morrocco.component.html',
  styleUrl: './dest-morrocco.component.scss'
})
export class DestMorroccoComponent {

  constructor(private viewportScroller:ViewportScroller){}

  public goToSection(elementId: string){ 
    this.viewportScroller.scrollToAnchor(elementId);
}
}
