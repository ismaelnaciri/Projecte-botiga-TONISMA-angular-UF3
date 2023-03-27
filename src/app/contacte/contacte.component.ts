import { Component } from '@angular/core';
import * as http from "http";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css']
})
export class ContacteComponent {
  name: any;
  mail: any;
  missatge: any;

  constructor(private http: HttpClient) {
  }

  escriure() {
    console.log("XD");
    this.http.post<any>("http://localhost:3080/api/escriure", {name: this.name, mail: this.mail, missatge: this.missatge});
  }
}
