import { Injectable } from '@angular/core';
//import {Product} from "./Productes";

@Injectable({
  providedIn: 'root'
})
export class ServeisService {

  objectes: any[] = [];

  lol = {
    nom: "patata",
    preu: 500
  }

  test = {
    nom: "jose",
    preu: 2
  }

  constructor() {
  }

  addToCart(producte: any){
    this.objectes.push(producte);
  }

  getItems() {
    return this.objectes;
  }

  getItemsPrice(): number {
    let total = 0;
    this.objectes.push(this.lol)
    this.objectes.push(this.test)
    for (let i = 0; i < this.objectes.length; i++) {
        total += this.objectes.at(i).preu;
    }
    return total;
  }

  clearItems () {
    this.objectes = [];

    return this.objectes;
  }

  eliminarItem(index: any){
    this.objectes.splice(index, 1)
  }


}
