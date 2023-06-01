import {Component} from '@angular/core';
import {RegistreLoginService} from "../registre-login.service";


@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css']
})
export class IniciComponent {
  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat

  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
    console.log("funciona clic")
  }


  constructor(private registraServei: RegistreLoginService) {
  }
}
