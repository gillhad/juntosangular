import { Component } from '@angular/core';
import { MainHeaderComponent } from '../../../components/main-header/main-header/main-header.component';
import { FooterComponentComponent } from '../../../components/footer/footer-component/footer-component.component';
import { commonComponents } from '../../../components/exportComponents';
import { RouterModule } from '@angular/router';
import { MapComponentComponent } from '../../../components/map-component/map-component/map-component.component';
import { CountriesHelperService } from '../../../../services/countries-helper.service';
import { Countries } from '../../../../models/countries';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dest-home',
  standalone: true,
  imports: [MainHeaderComponent,commonComponents,RouterModule, MapComponentComponent, NgFor],
  templateUrl: './dest-home.component.html',
  styleUrl: './dest-home.component.scss'
})
export class DestHomeComponent {


  public mapCountries:Countries[] = [];

constructor(private _countryService:CountriesHelperService){
  this.mapCountries = _countryService.getCountries();
}

}
