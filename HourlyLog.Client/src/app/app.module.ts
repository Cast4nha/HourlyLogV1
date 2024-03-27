import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/components/navbar/navbar.component';
import { ColaboradoresListaComponent } from './features/colaboradores/colaboradores-lista/colaboradores-lista.component';
import { ColaboradoresCadastroComponent } from './features/colaboradores/colaboradores-cadastro/colaboradores-cadastro.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditarColaboradorComponent } from './features/colaboradores/editar-colaborador/editar-colaborador.component';
import { ListaRegistrodepontoComponent } from './features/registro-de-ponto/lista-registrodeponto/lista-registrodeponto.component';
import { AdicionarRegistrodepontoComponent } from './features/registro-de-ponto/adicionar-registrodeponto/adicionar-registrodeponto.component';
import { HomeComponent } from './features/public/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ColaboradoresListaComponent,
    ColaboradoresCadastroComponent,
    EditarColaboradorComponent,
    ListaRegistrodepontoComponent,
    AdicionarRegistrodepontoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
