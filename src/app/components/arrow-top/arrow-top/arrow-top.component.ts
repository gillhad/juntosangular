import { NgClass, ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'arrow-top',
  standalone: true,
  imports: [NgClass],
  templateUrl: './arrow-top.component.html',
  styleUrl: './arrow-top.component.scss',
})
export class ArrowTopComponent {
  constructor(private scroller: ViewportScroller) {}

  public showArrow: boolean = false;
  public scrolling: boolean = false;
  public isScrolling: boolean = false;

  public pos: number = 0;

  @HostListener('window:scroll', ['$event']) onScroll() {
    
    ///check if user is scrolling & if arrow should be rendered
    if (window.screenY == 0) {
      this.scrolling = false;
    }
    if (window.scrollY > 175) {
      this.isScrolling = true;
      this.showArrow = true;
    } else {
      this.showArrow = false;
    }
    this.arrowFadeoutController();
  }


  ///controls if can go to top
  async scrollToTop() {
    if (this.scrolling) {
      return;
    }
    this.scrolling = true;
    await this.animateScroll();

    //}while(pos>0);
  }


  ///Delays the scroll to make it more appealing
  async animateScroll() {
    this.pos = this.scroller.getScrollPosition()[1];
    for (var i = 0; i < this.pos; i++) {
      setTimeout(() => {
        this.scroller.scrollToPosition([0, this.pos]);
        this.pos--;
        if (this.pos == 0) {
          this.scrolling = false;
        }
      }, 100);
    }
  }


  ///clears the arrow after a delay when stop scrolling
  arrowFadeoutController(){
    setTimeout(()=>{
        this.isScrolling=false;
    },1000);
  }
}
