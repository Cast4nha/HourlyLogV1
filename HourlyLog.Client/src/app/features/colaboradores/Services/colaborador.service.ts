import { Injectable } from '@angular/core';
import { CadastroColaboradorRequest } from '../Models/cadastro-colaborador-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Colaborador } from '../Models/colaborador.model';
import { environment } from '../../../../environments/environment.development';
import { AtualizarColaboradorRequest } from '../Models/atualizar-colaborador-request.model';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http: HttpClient) { }


  cadastrarColaborador(model: CadastroColaboradorRequest): Observable<void> { 

    return this.http.post<void>(`${environment.apiBaseUrl}/api/Colaboradores`, model);

  }

  getAllColaboradores(): Observable<Colaborador[]>{
   
    return this.http.get<Colaborador[]>(`${environment.apiBaseUrl}/api/Colaboradores`);
  }

  getColaboradorById(id: string): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${environment.apiBaseUrl}/api/Colaboradores/${id}`);

  }

  atualizarColaborador(id: string, atualizarColaboradorRequest: AtualizarColaboradorRequest) : 
  Observable<Colaborador>{
   return this.http.put<Colaborador>(`${environment.apiBaseUrl}/api/Colaboradores/${id}`,
    atualizarColaboradorRequest);

  }

  deletarColaborador(id: string) : Observable<Colaborador> {
    return this.http.delete<Colaborador>(`${environment.apiBaseUrl}/api/Colaboradores/${id}`)

  }

}
