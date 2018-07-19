import {Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges} from '@angular/core';


@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit, OnDestroy, OnChanges {
  @Input() imagen:string ;
  @Input() texto:string;
  @Output() selecciono: EventEmitter<string> = new EventEmitter<string>();

contador=20;
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('onInit');

    console.log('contador:', this.contador);
  }

  aumentarContador() {
    this.contador = this.contador + 1;
    this.cambioElContador.emit(this.contador);
  }

  ngOnDestroy(){
    console.log('on Destroy');
  }




  ngOnChanges(cambios){
    console.log('onChange', cambios);

  }

  seleccionoUsuario(){
    console.log('Selecciono', this.texto);
    this.selecciono.emit(this.texto);
  }


}
