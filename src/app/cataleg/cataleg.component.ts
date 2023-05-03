import {Component, OnInit} from '@angular/core';
import {ServeisService} from "../serveis.service";
import {HttpClient} from "@angular/common/http";

//import { Product, products } from "../Productes";

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css']
})
export class CatalegComponent implements OnInit {
  products: any;

  constructor(private s: ServeisService, private http: HttpClient) {
    this.listProductes();
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
    window.alert((`${product.nom} s'ha afegit a la cistella.`))
  }

  filterShown (product: any) {
    let filtratgeA = product.type = 'Joc'
  }


}
