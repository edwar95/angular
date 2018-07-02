import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredencialesService {
  estaLogeado= false;

  constructor() { }
  login (password:string){
    if (password==='mashi'){
      this.estaLogeado=false;
    }else{
      this.estaLogeado= true;
    }
  }

}
