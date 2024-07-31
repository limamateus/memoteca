import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

 pensamento : Pensamento = {
    id: 0,
    conteudo:'',
    autoria:'',
    modelo:''
  }
  constructor(
    private service :  PensamentoService,
    private router : Router,
    private route :  ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
     this.service.buscarPorIdPensamento(id!).subscribe((pensamento) =>{
      this.pensamento = pensamento
     });

  }
  salvarPensamento(){
    this.service.editarPensamento(this.pensamento.id!,this.pensamento).subscribe(() =>{
      this.router.navigate(["/listarPensamentos"])
    })
  }

  cancelar(){
    this.router.navigate(["/listarPensamentos"])
  }
}
