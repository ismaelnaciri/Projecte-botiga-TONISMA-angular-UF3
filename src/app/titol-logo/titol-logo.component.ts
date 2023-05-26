import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-titol-logo',
  templateUrl: './titol-logo.component.html',
  styleUrls: ['./titol-logo.component.css']
})
export class TitolLogoComponent implements OnInit{

  name: any;
  wallet = "";

  constructor(private s: UsersService) {
    if (this.s.autenticat == true)
      this.name = this.s.arrClients[this.s.posAutenticat];

  }


  ngOnInit() {

  }

  update() {
    this.wallet = this.s.walletName;
  }
}
