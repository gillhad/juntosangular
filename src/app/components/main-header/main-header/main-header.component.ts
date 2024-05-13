import { Component, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from '../../../Home/language-selector/language-selector.component';
import { NgClass, ViewportScroller } from '@angular/common';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [RouterModule,LanguageSelectorComponent, NgClass],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent  {

  constructor(private scroller:ViewportScroller){
   
    
  }

@Input() parallaxView:string = "";
@Input() image:string ="";



///Sticks the topbar to the top
@HostListener('window:scroll',['$event']) onScroll(){
  if(window.scrollY>175){
    this.navbarIsFixed = true;
  }else{
    this.navbarIsFixed = false;
  }
}
public navbarIsFixed:boolean = false;



}
