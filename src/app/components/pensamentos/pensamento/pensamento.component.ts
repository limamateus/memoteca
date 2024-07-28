import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  // @Input é usado para que o valor seja passado para outros componentes
  @Input() pensamento : Pensamento= {
    id: 10,
    modelo : "modelo3",
    conteudo : "Esse conteudo é do Angular",
    autoria : "Dev Bla bla"

  }

  larguraPensamento() : string {
    if(this.pensamento.conteudo.length > 253){
      return 'pensamento.g'
    }
    return 'pensamento.p'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
