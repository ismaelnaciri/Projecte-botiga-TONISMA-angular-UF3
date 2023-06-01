import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-f2p',
  templateUrl: './surprise.component.html',
  styleUrls: ['./surprise.component.css']
})
export class SurpriseComponent implements OnInit{

  constructor(private http:HttpClient) {

  }
  numDex: number | undefined;



  selectPokemon(){
    this.numDex=Math.ceil(Math.random()*1010)
    return this.numDex
  }

  ngOnInit() {
  }

  async SelectPokemon(): Promise<any> {
    const promise= new Promise(async (resolve,reject)=>{
      this.selectPokemon()
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.numDex}`).subscribe({
        next:(data)=>{
          resolve(data)
        }, error:(err)=>{
          reject(err)
        }
      })
    })
    return promise;
  }
  async MostrarPokemon(){
    await this.SelectPokemon().then((value)=>{
      console.log(value)
      // @ts-ignore
      document.getElementById('num').innerHTML=value.id
      // @ts-ignore
      document.getElementById('nom').innerHTML=value.name
      // @ts-ignore
      document.getElementById('sprite').src=value.sprites.front_default

    })
  }


}
