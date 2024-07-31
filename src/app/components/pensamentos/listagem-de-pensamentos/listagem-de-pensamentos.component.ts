import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listagem-de-pensamentos',
  templateUrl: './listagem-de-pensamentos.component.html',
  styleUrls: ['./listagem-de-pensamentos.component.css']
})
export class ListagemDePensamentosComponent implements OnInit {

  pensamentos : Pensamento[] = [

  ];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    //
     this.service.listarPensamentos().subscribe((listaPensamentos) =>{
      this.pensamentos = listaPensamentos
     });
  }

}
