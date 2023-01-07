import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registre-andlogin',
  templateUrl: './registre-andlogin.component.html',
  styleUrls: ['./registre-andlogin.component.css']
})
export class RegistreANDLoginComponent implements OnInit{
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
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    }
    //@ts-ignore
    botoLogin.onclick = function checkIfDataCorrect () {
      let email
      localStorage.getItem("email")
      localStorage.getItem("password")

    }
  }
}
