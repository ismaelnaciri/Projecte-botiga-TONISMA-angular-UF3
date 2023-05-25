import {Component, OnInit} from '@angular/core';
import {ServeisService} from "../serveis.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent implements OnInit{
  items = this.s.getItems();
  preuVariable = 0;
  monedaSimbol = "€";
  canviMoneda = 0;

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
    this.canviMoneda = this.preuVariable;
    if (selectedValue === "BNB") {
      this.canviMoneda = this.preuVariable / conversio.binancecoin.eur;
      this.monedaSimbol = "BNB";
    }
    //@ts-ignore
    else if (selectedValue === "BTC") {
      this.canviMoneda = this.preuVariable / conversio.bitcoin.eur;
      this.monedaSimbol = "BTC";
    }
    //@ts-ignore
    else if (selectedValue === "ETH") {
      this.canviMoneda = this.preuVariable / conversio.ethereum.eur;
      this.monedaSimbol = "ETH";
    }
    else if (selectedValue === "EUROS") {
      this.canviMoneda = this.calcularTotal();
      this.monedaSimbol = "€";
    }
    else if (selectedValue === "DOLARS") {
      this.canviMoneda = this.preuVariable / conversio.dollars.eur;
      this.monedaSimbol = "$";
    }
    else if (selectedValue === "default") {
      this.canviMoneda = 0;
      this.monedaSimbol = "€";
    }
  }

  async compraBNB(){
    const test = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,binancecoin,ethereum,dollars&vs_currencies=eur");
    const conversio = await test.json();
    this.canviMoneda = this.preuVariable / conversio.binancecoin.eur;
  }

  premerEnviar (): void{
    this.items = this.s.clearItems();
  }

  esborrar(index: number){
    this.s.eliminarItem(index);
  }
  ValidateInput (event: any, i: number){
    const quantity = + event.target.value;
    if (quantity < 1){
      event.target.value = this.items[i].quantity;
      return;
    }
    this.QuantityUpdated(quantity, i)
    this.calcularTotal();
  }

  private QuantityUpdated (quantity: number, i: number){
    this.items[i].quantity = quantity;
  }

  public CoinUpdate(coin: string) {
    for (let i = 0; i < this.items.length; i++)
      this.items[i].coin = coin;
  }

  public PriceUpdate(price: number){
    for (let i = 0; i < this.items.length; i++)
      this.items[i].price = price;
  }


  public calcularTotal(): number{
    let total: number = 0;
    for (let item of this.items){
      total += (item.quantity * item.preu)
    }
    this.preuVariable = total;
    return total;
  }

  public clearAll() {
    document.location.reload();
  }

  compraProducte(){
    this.CoinUpdate(this.monedaSimbol);
    this.compraBNB()
    this.PriceUpdate(this.canviMoneda)

    this.http.post('http://localhost:3080/compres', { json: this.items })
      .subscribe({
        error: error => {
          console.error("There was an error", error);
        }
      })
    this.clearAll()
  }
}
