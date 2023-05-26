import {Component, OnInit} from '@angular/core';
import {ServeisService} from "../serveis.service";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "../users.service";

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
  preuActual: any;

  constructor(private s: ServeisService, private http:HttpClient, private serv: UsersService) {

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
      this.preuActual = conversio.binancecoin.eur;
    }
    //@ts-ignore
    else if (selectedValue === "BTC") {
      this.canviMoneda = this.preuVariable / conversio.bitcoin.eur;
      this.monedaSimbol = "BTC";
      this.preuActual = conversio.bitcoin.eur;
    }
    //@ts-ignore
    else if (selectedValue === "ETH") {
      this.canviMoneda = this.preuVariable / conversio.ethereum.eur;
      this.monedaSimbol = "ETH";
      this.preuActual = conversio.ethereum.eur;
    }
    else if (selectedValue === "EUROS") {
      this.canviMoneda = this.calcularTotal();
      this.monedaSimbol = "€";
      this.preuActual = 1;
    }
    else if (selectedValue === "DOLARS") {
      this.canviMoneda = this.preuVariable / conversio.dollars.eur;
      this.monedaSimbol = "$";
      this.preuActual = conversio.dollars.eur;
    }
    else if (selectedValue === "default") {
      this.canviMoneda = 0;
      this.monedaSimbol = " ";
    }
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

  async compraProducte(){
    this.CoinUpdate(this.monedaSimbol);

    this.http.post('http://localhost:3080/compres', { json: this.items })
      .subscribe({
        error: error => {
          console.error("There was an error", error);
        }
      })

    this.clearAll()

    let res = ();
    let params = [
      {
        from: this.serv.walletName,
        to: "0x14c083cFbC76533D684A75D6eA4ba9933213e45a",
        value: Number(res).toString(16),
        data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
      },
    ]
    //@ts-ignore
    await window.ethereum.send({method: "eth_requestAccounts"}, params);
    // //@ts-ignore
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const temp = ethers.getAddress(this.serv.walletName);
    // //@ts-ignore
    // console.log(temp)
  }

}
