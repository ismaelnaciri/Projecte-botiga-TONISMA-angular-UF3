import { Component } from '@angular/core';

@Component({
  selector: 'app-titol-logo',
  templateUrl: './titol-logo.component.html',
  styleUrls: ['./titol-logo.component.css']
})
export class TitolLogoComponent implements OnInit{
  mostrar: any;
  constructor(private s: ServeisService) {
    this.s.isLoggedIn = false;
  }
  ngOnInit() {
    this.mostrar = localStorage.getItem("email");
    let logOutOnClick = document.getElementById("logout");
    //@ts-ignore
    logOutOnClick.onclick = function sortirSessio (){
      window.localStorage.clear();
    }
  }
}
