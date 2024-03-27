import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ColaboradorService } from '../Services/colaborador.service';
import { Colaborador } from '../Models/colaborador.model';
import { AtualizarColaboradorRequest } from '../Models/atualizar-colaborador-request.model';

@Component({
  selector: 'app-editar-colaborador',
  templateUrl: './editar-colaborador.component.html',
  styleUrl: './editar-colaborador.component.css'
})
export class EditarColaboradorComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;
  editarColaboradorSubscription?: Subscription;
  colaborador?: Colaborador;

  constructor(private route: ActivatedRoute,
    private colaboradorService: ColaboradorService,
    private router: Router) {
 
  }

 ngOnInit(): void {
   this.paramsSubscription = this.route.paramMap.subscribe({
    next: (params) => {
      this.id = params.get('id');


      if (this.id){
        this.colaboradorService.getColaboradorById(this.id)
        .subscribe({
          next: (response) => {
            this.colaborador = response;

          }
        });

      }
    }
   });
 }

 onFormSubmit(): void {
  const atualizarColaboradorRequest: AtualizarColaboradorRequest = {
    nome: this.colaborador?.nome ?? '',
    cargo: this.colaborador?.cargo ?? '',
    salario: this.colaborador?.salario ?? 0,
    email: this.colaborador?.email ?? '',
    telefone: this.colaborador?.telefone ?? '',
    matricula: this.colaborador?.matricula ?? ''

  };

  if (this.id){
    if (confirm('Tem certeza de que deseja salvar?')) {
      this.editarColaboradorSubscription = this.colaboradorService.atualizarColaborador(this.id, atualizarColaboradorRequest)
      .subscribe({
        next : (response) => {
          alert('Salvo com sucesso!');
          this.router.navigateByUrl('/Colaboradores/visualizar-colaboradores')
        }
      })
    }
 }
} 

onDelete(): void {
  if (this.id){
    if (confirm('Tem certeza de que deseja deletar?')) {
      this.colaboradorService.deletarColaborador(this.id)
      .subscribe({
        next: (response) => {
          alert('Deletado com sucesso!');
          this.router.navigateByUrl('/Colaboradores/visualizar-colaboradores')
        }
      })
    }
  }
}

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editarColaboradorSubscription?.unsubscribe();
  }

}
