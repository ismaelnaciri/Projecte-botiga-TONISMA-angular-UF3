import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  public autenticat: boolean | undefined;
  public posAutenticat = 0;
  public emailAutenticat: any;
  public arrClients: any[] = [];
  public usuari: any;

  pep = "pep"

  constructor(private http:HttpClient) {
    this.arrClients[0] = this.pep;
    this.arrClients[1] = "jose";
    // this.http.get<any>('http://localhost:3080/api/firebase').subscribe((document) =>{
    //   this.arrClients = document;
    // });
  }

  ngOnInit(): void {

  }
}

