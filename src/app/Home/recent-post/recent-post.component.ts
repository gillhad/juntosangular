import { Component, Inject, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'recent-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.scss'
})

export class RecentPostComponent {
  @Input() ima:string = "";
  @Input()  url:string = "";
  @Input() title:string = "";

constructor(){

}

ngOnInit() {
  
}
}
