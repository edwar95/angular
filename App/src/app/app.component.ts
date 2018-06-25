import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //interpolacion
  titulo = 'Web';
  usuario={
    nombre: 'David',
    apellido: 'Morales'
  };
  arregloNumeros=[5,4,3,2,1];
  mostrarTitulo= true;
  imageURL="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png";
  imageWidth=300;

  html=`
  <h1>hola</h1>
  <p>Hola mundo</p>
  <img src="${this.imageURL}">  
  `

  aumentar(evento){
    console.log('evento',evento);
    this.imageWidth=this.imageWidth+20;
  }

  disminuir(){
    this.imageWidth=this.imageWidth-20;
  }
}
