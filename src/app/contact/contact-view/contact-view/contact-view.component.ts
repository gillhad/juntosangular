import { Component, NgModule } from '@angular/core';
import { commonComponents } from '../../../components/exportComponents';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'contact-view',
  standalone: true,
  imports: [commonComponents, FormsModule],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss'
})
export class ContactViewComponent {

  public name:string="";
  public surname:string="";
  public country:string="";
  public days:string="";
  public mail:string="";


sendAlert(){
  if(this.formValidator()){
  alert("Gracias " + this.name + "!\n Espero que disfrutes tu viaje a " + this.country+".\n En breve recibirás un correo con información para tu viaje");
  }else{
    alert("Si no nos pasas toda la información no podremos ayduarte!");
  }
}

formValidator(){
  if(this.name.length<1 || this.surname.length<1 || this.country.length<1 || this.days.length<1 || this.mail.length<1){
        return false;
  }else{
  return true;
  }
}
}
