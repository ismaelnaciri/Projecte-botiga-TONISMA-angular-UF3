import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeisService {
  public isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
  }
}
