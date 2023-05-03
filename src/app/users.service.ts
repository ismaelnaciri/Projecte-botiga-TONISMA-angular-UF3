import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public autenticat= false;
  public posAutenticat = -1;
  public emailAutenticat: any;
  public arrClients: any;
  public usuari: any;
  constructor(private http:HttpClient) {
    this.http.get<any>('http://localhost:3080/api/firebase').subscribe((document)=>{
      this.arrClients = document;
    });
  }
}

