import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProyectoModule } from './proyecto/proyecto.module';
import { UsuariosComponent } from './proyecto/usuarios/pages/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    ProyectoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
