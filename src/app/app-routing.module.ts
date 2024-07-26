import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemDePensamentosComponent } from './components/pensamentos/listagem-de-pensamentos/listagem-de-pensamentos.component';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';

const routes: Routes = [
  {
    path:'',
    redirectTo : 'listarPensamentos',
    pathMatch : "full"
  },
  {
    path :'criarPensamento',
    component : CriarPensamentoComponent
  },
  {
    path:'listarPensamentos',
    component: ListagemDePensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
