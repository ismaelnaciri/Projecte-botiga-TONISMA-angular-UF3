import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsersService} from "../users.service";

import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-registre-andlogin',
  templateUrl: './registre-andlogin.component.html',
  styleUrls: ['./registre-andlogin.component.css']
})
export class RegistreANDLoginComponent  {
  //Registrar
  nom:any;
  contrasenya:any;
  correu:any;
  autenticat = this.serveiUsuari.autenticat;
  nomAutenticat: any;

  //Login
  [x: string]: any;
  email:any;
  password:any;
  correuTrobat: any;
/*
  //Contacte
  missatge: any;
*/
  constructor(private http:HttpClient,public router:Router, private serveiUsuari: UsersService, /*public firebaseAuth: AngularFireAuth*/) {
   /* if(this.autenticat){
      this.nomAutenticat = this.serveiUsuari.arrClients.clients[this.serveiUsuari.posAutenticat].Nom;
    }*/
    this.http.get<any>("http://localhost:3080/api/login").subscribe()
  }



}
/*async autenticar() {
    let errorMessage = ' ';

    this.correuTrobat = false;
    await this.firebaseAuth.signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        this.serveiUsuari.autenticat = true;
        this.serveiUsuari.usuari = JSON.stringify(res.user);
        this.serveiUsuari.emailAutenticat = this.email;


        for (let i = 0; i < this.serveiUsuari.arrClients.clients.length; i++) {
          if (this.serveiUsuari.arrClients.clients[i].Correu == this.email) {
            this.serveiUsuari.posAutenticat = i;
            this.correuTrobat = true;
          }
        }
        if (!this.correuTrobat) {
          alert("Sembla que no disposem de les dades d'aquest client!");
        }
      })
      .catch((error: any) => {

        errorMessage = error.message;
      })
    if (!this.serveiUsuari.autenticat) {
      alert("Entrada denegada! \n" + errorMessage);
    }
  }*/
/*
  Logout(){
    this.serveiUsuari.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }

  async registrar() {
    for (let i = 0; i < this.serveiUsuari.arrClients.clients.length; i++) {
      if (this.serveiUsuari.arrClients.clients[i].Correu == this.correu) {
        this.correuTrobat = true;
      }
    } if (this.correuTrobat) {
      alert("Ja existeix un usuari registrat amb aquest correu!")
    } else {
      this.http.post<any>('http://localhost:3080/datausers', {
        Correu: this.correu,
        Nom: this.nom,
        Contrasenya:this.contrasenya
      }).subscribe();
      this.http.post<any>('http://localhost:3080/signup', {
        email: this.email,
        password: this.password
      }).subscribe();
      this.http.post<any>('http://localhost:3080/log',{
        log: 'registre',
        nom: this.nom,
        correu: this.correu
      }).subscribe();

      await this.router.navigate(['/login']);
    }
  }*/

  /*
  this.http.post<any>('http://localhost:3080/registrar', {
    Correu: this.correu,
    Nom: this.nom,
    Contrasenya:this.contrasenya
  }).subscribe();
*/




