import {Component, OnInit} from '@angular/core';
import {ServeisService} from "../serveis.service";

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent implements OnInit{


  constructor(private s: ServeisService) {
  }

  ngOnInit() {
  }
}
