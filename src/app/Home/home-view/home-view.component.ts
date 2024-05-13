import { Component } from '@angular/core';
import { PostModelService } from '../../../services/post-model.service';
import { PostModel } from '../../../models/post-model';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { NgFor } from '@angular/common';
import { RecentPostComponent } from '../recent-post/recent-post.component';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { MainHeaderComponent } from '../../components/main-header/main-header/main-header.component';
import { FooterComponentComponent } from '../../components/footer/footer-component/footer-component.component';
import { commonComponents } from '../../components/exportComponents';
import { MapComponentComponent } from '../../components/map-component/map-component/map-component.component';
import { CountriesHelperService } from '../../../services/countries-helper.service';
import { Countries } from '../../../models/countries';

@Component({
  selector: 'home-view',
  standalone: true,
  imports: [NgFor, LanguageSelectorComponent, RecentPostComponent,MapComponentComponent, RouterModule, commonComponents],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {
  public title = 'juntos-angular';
  public actualLanguage:string = "es";
  //public menu = document.getElementById('listamenu');

  public  posts:PostModel[] = [];
  constructor(private _postService:PostModelService,private _countries:CountriesHelperService){}

  public mapCountries:Countries[] = [];

  ngOnInit(){
   this.posts = this._postService.getRecentPosts();
   this.mapCountries = this._countries.getCountries();
   console.log(this.mapCountries);
  }



  public navBarFixed = false;
  private scrollOffset:number  = 70;
}
