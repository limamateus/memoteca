import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-de-pensamentos',
  templateUrl: './listagem-de-pensamentos.component.html',
  styleUrls: ['./listagem-de-pensamentos.component.css']
})
export class ListagemDePensamentosComponent implements OnInit {

  pensamentos = [
    {
      modelo : "modelo2",
      conteudo : "Esse conteudo é do Angular 2 ",
      autoria : "Dev Bla"

    },
    {
      modelo : "modelo3",
      conteudo : "Esse conteudo é do Angular 3 ",
      autoria : "Dev Bla 2"

    },
    {
      modelo : "modelo1",
      conteudo : " Isso não só aumenta a segurança e a facilidade de manutenção, mas também torna o código mais limpo e escalável. Implementar essas praticas é crucial para garantir a integridade e a eficiência de sistemas complexos  Antes de usar o arquivo .env, as credenciais eram armazenadas diretamente no código-fonte. Isso apresentava vários riscos de segurança e dificultava a manutenção.",
      autoria : "Dev Bla 1"

    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
