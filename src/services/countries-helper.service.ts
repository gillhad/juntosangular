import { Injectable } from '@angular/core';
import { Countries } from '../models/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesHelperService {



  constructor() { }



 getCountries(){
 let country1 = new Countries("morocco","326,142,10","/destinations/morocco");
 let country2 = new Countries("other","326,130,10","/destinations/other");
 return [country1,country2];
 }

}
