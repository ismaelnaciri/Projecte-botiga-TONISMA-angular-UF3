import {Component, OnInit} from '@angular/core';
import {ServeisService} from "../serveis.service";
import { Product, products } from "../Productes";

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css']
})
export class CatalegComponent implements OnInit {
  products = products;

  constructor(private s: ServeisService) {
  }

  ngOnInit() {
  }

  addToCart(product: Product){
    this.s.addToCart(product);
    window.alert((`${product.name} s'ha afegit a la cistella.`))
  }
}
