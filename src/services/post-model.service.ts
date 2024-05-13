import { Injectable } from '@angular/core';
import { PostModel } from '../models/post-model';
import { title } from 'process';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class PostModelService {

  constructor() { }

  getRecentPosts(){
    let post1 = new PostModel("Ruta por marruecos","../assets/images/marruecosportada.jpg","/destinations/morocco");
    let post2 = new PostModel("Descubre comidas del mundo","../assets/images/burguer.jpg","/food");
    return [
      post1,
      post2
    ]
  }
  
}
