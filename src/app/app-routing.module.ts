import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemDePensamentosComponent } from './components/pensamentos/listagem-de-pensamentos/listagem-de-pensamentos.component';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

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
  },
  {
    path:'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path:'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
