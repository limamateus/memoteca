import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento : Pensamento = {

    conteudo:'',
    autoria:'',
    modelo:'modelo1'

  }

  constructor(
    private service : PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }


  salvarPensamento() {

    this.service.criarPensamento(this.pensamento).subscribe(() =>{
      this.router.navigate(["/listarPensamentos"])
    });

  }

  cancelarPensamento(){
    this.router.navigate(["/listarPensamentos"])
  }


}
