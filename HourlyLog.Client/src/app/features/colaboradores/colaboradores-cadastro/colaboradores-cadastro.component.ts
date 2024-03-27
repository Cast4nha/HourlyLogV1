import { Component } from '@angular/core';
import { CadastroColaboradorRequest } from '../Models/cadastro-colaborador-request.model';
import { ColaboradorService } from '../Services/colaborador.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-colaboradores-cadastro',
  templateUrl: './colaboradores-cadastro.component.html',
  styleUrl: './colaboradores-cadastro.component.css'
})
export class ColaboradoresCadastroComponent {

  model: CadastroColaboradorRequest;

  constructor(private colaboradorService: ColaboradorService,
    private router: Router){
    this.model = {
    nome: '',
    cargo: '',
    salario: 0,
    email:'' ,
    telefone: '',
    matricula: '',
    }
  }

  onFormSubmit(){
    this.colaboradorService.cadastrarColaborador(this.model)
    .subscribe({
      next: (response) => {
        alert('Usuário Cadastrado com sucesso!');
        this.router.navigateByUrl('/Colaboradores/visualizar-colaboradores')
      }
    });

  }

}