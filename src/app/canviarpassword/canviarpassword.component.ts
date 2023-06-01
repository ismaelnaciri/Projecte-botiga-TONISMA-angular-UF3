import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../users.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-canviarpassword',
  templateUrl: './canviarpassword.component.html',
  styleUrls: ['./canviarpassword.component.css']
})
export class CanviarpasswordComponent {
  email: any;
  async restaurarContrasenya(){
    await this.firebaseAuth.sendPasswordResetEmail(this.email);
    alert("S'ha enviat un correu per a restablir la contraseya a l'acreça indicada")
    await this.router.navigate(['/login'])
  }
  constructor(public router:Router, private usuariServei: UsersService, public firebaseAuth: AngularFireAuth) {}

}
