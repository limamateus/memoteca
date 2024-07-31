import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API   = 'http://localhost:3000/pensamentos'
  constructor(private http: HttpClient) {}

  listarPensamentos(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }

  criarPensamento(pensamento : Pensamento) : Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API,pensamento)
  }

  excluirPensamento(id: string): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorIdPensamento(id: string): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }



  editarPensamento(id: number, pensamento : Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return  this.http.put<Pensamento>(url,pensamento)

  }
}
