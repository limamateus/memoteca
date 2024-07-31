import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento  ={
    id : 0,
    modelo: '',
    conteudo:'',
    autoria:''
  }

  uid : string = ''!;


  constructor(
    private service : PensamentoService,
    private router : Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.uid  = this.route.snapshot.paramMap.get('id')!
  }

  excluirPensamento(){
    if(this.uid !== '' || this.uid !== null){
      this.service.excluirPensamento(this.uid).subscribe( ()=>{
        this.router.navigate(["/listarPensamentos"])
      });
    }
  }

  cancelar(){
    this.router.navigate(["/listarPensamentos"])
  }
}
