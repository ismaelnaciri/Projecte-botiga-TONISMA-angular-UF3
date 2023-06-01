import { Component } from '@angular/core';
import {RegistreLoginService} from "../registre-login.service";

@Component({
  selector: 'app-condicions',
  templateUrl: './condicions.component.html',
  styleUrls: ['./condicions.component.css']
})
export class CondicionsComponent {
  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat

  constructor(private registraServei: RegistreLoginService) {
  }

  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
    console.log("funciona clic")
  }
}
