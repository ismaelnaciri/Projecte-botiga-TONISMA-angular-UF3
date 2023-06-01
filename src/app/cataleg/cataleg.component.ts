import {Component, OnInit} from '@angular/core';
import {ServeisService} from "../serveis.service";
import {HttpClient} from "@angular/common/http";
import {RegistreLoginService} from "../registre-login.service";

//import { Product, products } from "../Productes";

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css']
})
export class CatalegComponent implements OnInit {
  products: any;
  autenticat = this.registreServei.autenticat
  nomAutenticat = this.registreServei.nomAutenticat

  constructor(private s: ServeisService, private http: HttpClient, private registreServei: RegistreLoginService) {
    this.listProductes();
  }

  tancarSessio(){
    this.registreServei.autenticat = false;
    this.registreServei.nomAutenticat = 'null';
    this.autenticat= false;
    this.nomAutenticat= 'null';
  }

  ngOnInit() {
  }

  listProductes() {
    this.http.get('http://localhost:3080/productes')
      .subscribe(data => {
        this.products = data;
      });
  }

  addToCart(product: any){
    product.quantity = 1;
    this.s.addToCart(product);
    window.alert((`${product.nom} s'ha afegit a la cistella.`));
  }

  filterShown (product: any) {
    let filtratgeJoc = product.type = "Joc";
    let filtratgeConsola = product.type = "Consola";
    let filtratgeMando = product.type = "Mando";
  }


}
