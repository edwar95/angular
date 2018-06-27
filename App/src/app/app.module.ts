import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { SeleccionComponent } from './netflix/seleccion/seleccion.component';

@NgModule({
  declarations: [//componentes
    AppComponent,
    SeleccionComponent
  ],
  imports: [//modulos
    BrowserModule,
    FormsModule
  ],
  providers: [//servicios
  ],
  bootstrap: [//componente principal
    AppComponent]
})
export class AppModule { }
