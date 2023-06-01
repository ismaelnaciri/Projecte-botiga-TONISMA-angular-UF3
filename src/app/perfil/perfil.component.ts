import { Component } from '@angular/core';
import {RegistreLoginService} from "../registre-login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  constructor(private registraServei: RegistreLoginService, private router: Router) {
  }

  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat
  cognomAutenticat = this.registraServei.cognomsAutenticat
  adrecaAutenticat = this.registraServei.adrecaAutenticat
  emailAutenticat = this.registraServei.correuAutenticat
  passwordAutenticat = this.registraServei.passwordAutenticat
  telefonAutenticat = this.registraServei.telAutenticat

  tancarSessio(){
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }
}
