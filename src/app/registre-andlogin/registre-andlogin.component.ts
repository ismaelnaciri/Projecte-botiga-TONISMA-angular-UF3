import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registre-andlogin',
  templateUrl: './registre-andlogin.component.html',
  styleUrls: ['./registre-andlogin.component.css']
})
export class RegistreANDLoginComponent implements OnInit{
  mostrar: any;
  constructor() {
  }

  ngOnInit() {

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

      let checkEmail = localStorage.getItem("email")
      let checkPassword = localStorage.getItem("password");

      if ((email == checkEmail) && (password == checkPassword)){
        alert("Login successful!!!")
      } else {
        alert("Login failed, try again with different credentials")

      }
    }
  }
}
