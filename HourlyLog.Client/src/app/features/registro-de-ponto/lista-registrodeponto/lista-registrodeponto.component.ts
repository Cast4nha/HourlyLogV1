import { Component, OnInit } from '@angular/core';
import { RegistroDePontoService } from '../Services/registro-de-ponto.service';
import { Observable } from 'rxjs';
import { RegistroDePonto } from '../Models/registro-de-ponto.model';

@Component({
  selector: 'app-lista-registrodeponto',
  templateUrl: './lista-registrodeponto.component.html',
  styleUrls: ['./lista-registrodeponto.component.css']
})
export class ListaRegistrodepontoComponent implements OnInit {

  registrosDePonto$?: Observable<RegistroDePonto[]>;
 
  constructor(private registroDePontoService : RegistroDePontoService){

  }
 
  ngOnInit(): void {
   this.registrosDePonto$ = this.registroDePontoService.getAllRegistrosDePonto();
  }
  

  calcularHorasTrabalhadas(horaEntrada: Date, horaSaida: Date): string {
    let entrada = new Date(horaEntrada);
    let saida = new Date(horaSaida);

    let diferenca = saida.getTime() - entrada.getTime();
    let horasTrabalhadas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutosTrabalhados = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    let segundosTrabalhados = Math.floor((diferenca % (1000 * 60)) / 1000);

    return horasTrabalhadas + " horas e " + minutosTrabalhados + " minutos.";
  }
}