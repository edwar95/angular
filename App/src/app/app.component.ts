import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //interpolacion

  contadorDesdePapa=0;

  titulo = 'Web';
  usuario={
    nombre: 'David',
    apellido: 'Morales'
  };
  arregloNumeros=[5,4,3,2,1];
  mostrarTitulo= true;
  imageURL="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png";
  imageWidth=300;
  mostrarComponente=false;
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

  actualizarContador(contadorHijo){

    console.log('se ejecuto',contadorHijo);
    this.contadorDesdePapa=contadorHijo;
  }

  arregloUsuarios = [
    {
      id:1,
      imagen:'/assets/perfil1.png',
      texto:'tatis1909'
    },
    {
      id:2,
      imagen:'/assets/perfil2.png',
      texto:'pedro'
    },
    {
      id:3,
      imagen:'/assets/perfil3.png',
      texto:'Jeff'
    },
    {
      id:4,
      imagen:'/assets/perfil4.png',
      texto:'Edd'
    }
  ];

}
