import { Routes } from '@angular/router';
import { DestHomeComponent } from './destination/destinations-home/dest-home/dest-home.component';
import { AppComponent } from './app.component';
import { RecentPostComponent } from './Home/recent-post/recent-post.component';
import { LanguageSelectorComponent } from './Home/language-selector/language-selector.component';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { HomeViewComponent } from './Home/home-view/home-view.component';
import { ContactViewComponent } from './contact/contact-view/contact-view/contact-view.component';
import { FoodViewComponent } from './food/food-view/food-view/food-view.component';
import { DestMorroccoComponent } from './destination/destinations/dest-mor/dest-morrocco/dest-morrocco.component';
import { NoFoundComponent } from './components/no-found/no-found/no-found.component';

export const routes: Routes = [
   {path:"", redirectTo:"home", pathMatch:"full"},
   {path:"destinations",component:DestHomeComponent},
   {path:"destinations/morocco",component:DestMorroccoComponent},
   {path:"home",component:HomeViewComponent},
   {path:"food",component:FoodViewComponent},
   {path:"contact",component:ContactViewComponent},
   {path:"**", component: NoFoundComponent}
];
