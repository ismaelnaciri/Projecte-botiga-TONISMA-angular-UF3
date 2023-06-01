import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsersService} from "../users.service";

import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Interface} from "ethers";
import {RegistreLoginService} from "../registre-login.service";


declare global {
  interface Window {
    ethereum: any;
  }
}

@Component({
  selector: 'app-registre-andlogin',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent  {
  correu: any;
  passwd: any;
  nom: any;
  cognoms: any;
  adreca: any;
  telefon: any;

  autenticat = this.registraServei.autenticat
  nomAutenticat = this.registraServei.nomAutenticat

  tancarSessio(){
    window.location.reload();
    this.registraServei.autenticat = false;
    this.registraServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }

  registrar(){
    let trobat = false;
    for(let i = 0; i <= this.registraServei.correu_array.length; i++ ){
      if (this.registraServei.correu_array[i]==this.correu){
        trobat = true;
        alert("Ja existeix un usuari amb aquest correu")
        break;
      }
    }
    if (!trobat){
      this.registraServei.correu_array.push(this.correu)
      this.registraServei.passwd_array.push(this.passwd)
      this.registraServei.nom_array.push(this.nom)
      this.registraServei.cognoms_array.push(this.cognoms)
      this.registraServei.adreca_array.push(this.adreca)
      this.registraServei.tel_array.push(this.telefon)
      window.alert(`S'ha enviat un correu de verificacio.`)
      this.router.navigate(['/login'])
    }


  }
  constructor(private registraServei: RegistreLoginService,public router:Router) {
  }

  ngOnInit(){}

}
