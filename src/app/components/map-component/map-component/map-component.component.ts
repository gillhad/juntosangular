import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'map-component',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.scss'
})
export class MapComponentComponent {

  @Input() name:string ="";
  @Input() coords:string ="";
  @Input() path:string ="";
}
