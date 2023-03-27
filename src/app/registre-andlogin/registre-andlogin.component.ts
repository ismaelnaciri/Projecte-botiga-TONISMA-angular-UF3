import {Component, OnInit} from '@angular/core';
import {HttpParams} from "@angular/common/http";

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


  constructor() {
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
