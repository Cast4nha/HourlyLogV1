import { Component } from '@angular/core';
import { AdicionarRegistroDePonto } from '../Models/adicionar-registrodeponto.model';
import { RegistroDePontoService } from '../Services/registro-de-ponto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-registrodeponto',
  templateUrl: './adicionar-registrodeponto.component.html',
  styleUrls: ['./adicionar-registrodeponto.component.css']
})
export class AdicionarRegistrodepontoComponent {
  model: AdicionarRegistroDePonto;

  constructor(private registroDePontoService : RegistroDePontoService,
    private router: Router) {
    this.model = {
      colaboradorid: 0,
      horaEntrada:  new Date(),
      horaSaida:  new Date(),  
    }
  }

  onFormSubmit(): void{
    let now = new Date();
    let horaSaida = new Date(this.model.horaSaida);
  
    if (this.model.horaEntrada > this.model.horaSaida) {
      alert('O Horário de entrada não pode ser maior que a hora de saída.');
      return;
    }
  
    if (horaSaida > now) {
      alert('O Horário de saída não pode ser maior do que o dia atual.');
      return;
    }
 
  
    this.registroDePontoService.registrarPonto(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/Registrosdeponto/visualizarregistros')

      }

    });
    
  }
}

