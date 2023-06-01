import { Component } from '@angular/core';
import * as http from "http";
import {HttpClient} from "@angular/common/http";
import {RegistreLoginService} from "../registre-login.service";

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css']
})
export class ContacteComponent {
  name: any;
  mail: any;
  missatge: any;

  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat

  constructor(private http: HttpClient, private registraServei: RegistreLoginService) {
  }

  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
    console.log("funciona clic")
  }

  escriure() {
    console.log("XD");
    this.http.post<any>("http://localhost:3080/api/escriure", {name: this.name, mail: this.mail, missatge: this.missatge});
  }
}
