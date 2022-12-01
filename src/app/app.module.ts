import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    ClientesComponent, 
    ServiciosComponent, 
    FooterComponent, InicioComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      {path:'', component:InicioComponent},
      {path:'servicios', component:ServiciosComponent},
      {path:'clientes', component:ClientesComponent},
      {path:'**', redirectTo:'/', pathMatch:'full'}
   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
