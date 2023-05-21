import {Component, OnInit} from '@angular/core';
import {ServeisService} from "../serveis.service";
import {Product} from "../Productes";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent implements OnInit{
  items = this.s.getItems();
  preuVariable = this.s.getItemsPrice();
  monedaSimbol = "€";

  constructor(private s: ServeisService, private http:HttpClient) {

  }


  ngOnInit() {
    const selectElement = document.getElementById("cryptosID") as HTMLSelectElement;
    selectElement.addEventListener("change", this.preuCryptos.bind(this));
  }

  async preuCryptos() {
    // @ts-ignore
    const selectedValue = (event.target as HTMLSelectElement).value;
    const test = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,binancecoin,ethereum,dollars&vs_currencies=eur");
    const conversio = await test.json();
    //@ts-ignore
    if (selectedValue === "BNB") {
      this.preuVariable = this.preuVariable / conversio.binancecoin.eur;
      this.monedaSimbol = "BNB";
    }
    //@ts-ignore
    else if (selectedValue === "BTC") {
      this.preuVariable = this.preuVariable / conversio.bitcoin.eur;
      this.monedaSimbol = "BTC";
    }
    //@ts-ignore
    else if (selectedValue === "ETH") {
      this.preuVariable = this.preuVariable / conversio.ethereum.eur;
      this.monedaSimbol = "ETH";
    }
    else if (selectedValue === "EUROS") {
      this.preuVariable = 30;
      this.monedaSimbol = "€";
    }
    else if (selectedValue === "DOLARS") {
      this.preuVariable = this.preuVariable / conversio.dollars.eur;
    }
  }

  premerEnviar (): void{
    this.items = this.s.clearItems();
  }

  esborrar(index: number){
    this.s.eliminarItem(index);
  }
  ValidateInput (event: any, i: number){
    const quantity = +event.target.value;
    if (quantity < 1){
      event.target.value = this.items[i].quantity;
      return;
    }
    this.QuantityUpdated(quantity, i)
  }

  private QuantityUpdated (quantity: number, i: number){
    this.items[i].quantity = quantity;

    // this.s.posarDadesCistella(this.items)
  }
  public calcularTotal(): number{
    let total:number = 0;
    for (let item of this.items){
      total += (item.quantity * item.preu)
    }
    return total;
  }

  public clearAll() {
    document.location.reload();
  }

  compraProducte(){
    this.http.post('http://localhost:3080/compres', { json: this.items })
      .subscribe({
        error: error => {
          console.error("There was an error", error);
        }
      })
    this.clearAll()
  }
}
