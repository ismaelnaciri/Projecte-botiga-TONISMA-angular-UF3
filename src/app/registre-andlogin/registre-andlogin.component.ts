import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsersService} from "../users.service";

// @ts-ignore
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-registre-andlogin',
  templateUrl: './registre-andlogin.component.html',
  styleUrls: ['./registre-andlogin.component.css']
})
export class RegistreANDLoginComponent implements OnInit{
  mostrar: any;
  email:any;
  password:any;
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
  async autenticar() {
    let errorMessage = ' ';

    await this.firebaseAuth.signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        this.serveiUsuari.autenticat = false;
        this.serveiUsuari.usuari = JSON.stringify(res.user);
        this.serveiUsuari.emailAutenticat = this.email;
        this.correuTrobat = false;

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
      .catch((error) => {
        const errorCode = error.code;
        errorMessage = error.message;
      })
    if (!this.serveiUsuari.autenticat) {
      alert("Entrada denegada! \n" + errorMessage);
    }
  }
*/
  Logout(){
    this.serveiUsuari.autenticat = false;
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }

  registrar()
  {
    this.http.post<any>('http://localhost:3080/registrar', {
      Correu: this.correu,
      Nom: this.nom,
      Contrasenya:this.contrasenya
    }).subscribe();

  }

  constructor(private http:HttpClient,public router:Router, private serveiUsuari: UsersService, public firebaseAuth: AngularFireAuth) {

  }

  ngOnInit() {
/*
    let botoRegister = document.getElementById("submitData");
    let botoLogin = document.getElementById("checkData");
    //@ts-ignore
    botoRegister.onclick = function storeData() {
      let email, password;

      // @ts-ignore
      email = document.getElementById("username_signin").value;
      //@ts-ignore
      password = document.getElementById("password_signin").value;

    }
    //@ts-ignore
    botoLogin.onclick = function checkIfDataCorrect () {
      //@ts-ignore
      let email = document.getElementById("username_login").value;
      //@ts-ignore
      let password = document.getElementById("password_login").value;


    }*/
  }
}
function registrar() {
    throw new Error('Function not implemented.');
}

