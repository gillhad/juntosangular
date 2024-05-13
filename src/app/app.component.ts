import { PostModel } from './../models/post-model';
import { Component, HostListener, OnInit, Output } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { RecentPostComponent } from './Home/recent-post/recent-post.component';
import { PostModelService } from '../services/post-model.service';
import { NgFor, ViewportScroller } from '@angular/common';
import { LanguageSelectorComponent } from './Home/language-selector/language-selector.component';
import { HomeViewComponent } from './Home/home-view/home-view.component';
import { EventEmitter } from 'node:stream';
import { ArrowTopComponent } from './components/arrow-top/arrow-top/arrow-top.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,RouterModule, RecentPostComponent, NgFor, LanguageSelectorComponent, HomeViewComponent, ArrowTopComponent]
})
export class AppComponent {
  public title = 'juntos-angular';
   public actualLanguage:string = "es";
   public navbarIsFixed = false;
   public  posts:PostModel[] = [];

   @HostListener('window.scroll',['$event']) onScroll(){
    console.log("scroll");
    if(window.scrollY>100){
      console.log("TE HAS PASADO DE SCROLLS")
      this.navbarIsFixed = true;
    }else{
      this.navbarIsFixed = false;
    }
  }
  
public position:any;
   constructor(private _postService:PostModelService,private router:Router,private scroller:ViewportScroller){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        scroller.scrollToPosition([0,0]);
      }
      });


      //this.position = scroller.getScrollPosition();
      //console.log(this.position);
   }

   ngOnInit(){
    this.posts = this._postService.getRecentPosts();
   }



  

  //  @HostListener('window:scroll')
  //  onWindowScroll() {
  //   console.log("scroll");
  //   this.navBarFixed = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) > this.scrollOffset;
  // }

   /*
const querystring = window.location.search;
 urlparams = new URLSearchParams(this.querystring);
actualLanguage = urlparams.get('lang');
const espLanguage = document.getElementsByClassName('es');
const enLanguage = document.getElementsByClassName('en');


if(actualLanguage==null | actualLanguage != 'en'){
  for(element of enLanguage) {
    element.style.display = 'none';
    }
  for(element of espLanguage){
  element.style.display = 'block';
 
  }
  window.onscroll = function() {scrollFixed()};
 var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function scrollFixed() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

}else{
  spalanguage = false;
  for(element of enLanguage) {
    element.style.display = 'block';    
  }
  for(element of espLanguage)
  element.style.display = 'none';
  window.onscroll = function() {scrollFixed2()};

var navbar2 = document.getElementById("navbaren");

var sticky2 = navbar2.offsetTop;

function scrollFixed2() {
  if (window.pageYOffset >= sticky2) {
    navbar2.classList.add("sticky")
  } else {
    navbar2.classList.remove("sticky");
  }
}

}*/
}
