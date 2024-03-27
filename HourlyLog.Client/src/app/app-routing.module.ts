import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresListaComponent } from './features/colaboradores/colaboradores-lista/colaboradores-lista.component';
import { ColaboradoresCadastroComponent } from './features/colaboradores/colaboradores-cadastro/colaboradores-cadastro.component';
import { EditarColaboradorComponent } from './features/colaboradores/editar-colaborador/editar-colaborador.component';
import { ListaRegistrodepontoComponent } from './features/registro-de-ponto/lista-registrodeponto/lista-registrodeponto.component';
import { AdicionarRegistrodepontoComponent } from './features/registro-de-ponto/adicionar-registrodeponto/adicionar-registrodeponto.component';
import { HomeComponent } from './features/public/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Colaboradores/visualizar-colaboradores',
    component: ColaboradoresListaComponent
  },
  
  {
    path: 'Colaboradores/colaboradores-cadastro',
    component: ColaboradoresCadastroComponent
  },
  {
    path: 'Colaboradores/:id',
    component: EditarColaboradorComponent
  },

  {
    path: 'Registrosdeponto/visualizarregistros',
    component: ListaRegistrodepontoComponent
  },
  {
    path: 'Registrodeponto/registrarponto',
    component: AdicionarRegistrodepontoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
