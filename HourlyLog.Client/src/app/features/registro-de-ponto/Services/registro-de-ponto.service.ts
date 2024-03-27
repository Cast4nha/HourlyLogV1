import { Injectable } from '@angular/core';
import { AdicionarRegistroDePonto } from '../Models/adicionar-registrodeponto.model';
import { Observable } from 'rxjs';
import { RegistroDePonto } from '../Models/registro-de-ponto.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegistroDePontoService {

  constructor(private http: HttpClient) { }

  registrarPonto(data: AdicionarRegistroDePonto) : Observable<RegistroDePonto> {
    
    return this.http.post<RegistroDePonto>(`${environment.apiBaseUrl}/api/RegistroDePonto/`, data);

  }

  getAllRegistrosDePonto() : Observable<RegistroDePonto[]> {
    return this.http.get<RegistroDePonto[]>(`${environment.apiBaseUrl}/api/RegistroDePonto/`);
  } 
}
