import { Component, OnInit } from '@angular/core';
import {CredencialesService} from "../../servicios/credenciales.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {
  password:'';
  constructor(private _credencialesService: CredencialesService, private _router: Router) {

  }

  ngOnInit() {
  }

  login(){
    this._credencialesService.login(this.password);
    if(this._credencialesService.estaLogeado) {
      console.log("se va a la ruta");
      const rutaHomeUsuario = [
        '/home',
        'usuario',
        '1',
        'epn'
      ];
      this._router.navigate(rutaHomeUsuario);
      //ruta home
    }
  }

}
