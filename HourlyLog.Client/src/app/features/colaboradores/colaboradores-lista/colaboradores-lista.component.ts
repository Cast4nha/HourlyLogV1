import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../Services/colaborador.service';
import { Colaborador } from '../Models/colaborador.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-colaboradores-lista',
  templateUrl: './colaboradores-lista.component.html',
  styleUrl: './colaboradores-lista.component.css'
})
export class ColaboradoresListaComponent implements OnInit {
  
  colaboradores$?: Observable<Colaborador[]>;

  constructor(private colaboradorService: ColaboradorService) {

  }

  ngOnInit(): void {
    this.colaboradores$= this.colaboradorService.getAllColaboradores();
 
  }


}
