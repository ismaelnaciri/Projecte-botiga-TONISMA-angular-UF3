import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projecte-botiga-TONISMA-angular';

  constructor(private http: HttpClient) {

    let req = new HttpParams().set('email', 'xd@gmail.com');
    let xd = req.set('password', '1234523122')

    this.http.get<any>("http://localhost:3080/api/login", {params: req}).subscribe((clients) => {
      console.log(clients);
      console.log(clients.email);
    });


  }
}
