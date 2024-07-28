import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listagem-de-pensamentos',
  templateUrl: './listagem-de-pensamentos.component.html',
  styleUrls: ['./listagem-de-pensamentos.component.css']
})
export class ListagemDePensamentosComponent implements OnInit {

  pensamentos : Pensamento[] = [

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
