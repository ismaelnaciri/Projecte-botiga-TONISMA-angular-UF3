import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistreLoginService {

  public autenticat = false;
  public nomAutenticat = 'null' as String;
  public correuAutenticat = 'null' as String;
  public adrecaAutenticat = 'null' as String;
  public cognomsAutenticat = 'null' as String;
  public passwordAutenticat = 'null' as String;
  public telAutenticat: number = 0;

  //@ts-ignore
  public correu_array : Array<String>=[];
  //@ts-ignore
  public passwd_array : Array<String>=[];
  //@ts-ignore
  public nom_array : Array<String>=[];
  //@ts-ignore
  public cognoms_array : Array<String>=[];
  //@ts-ignore
  public adreca_array : Array<String>=[];
  //@ts-ignore
  public tel_array : Array<number>=[];
}
