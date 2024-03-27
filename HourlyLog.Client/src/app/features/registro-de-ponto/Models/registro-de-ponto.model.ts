import { Colaborador } from "../../colaboradores/Models/colaborador.model";

export interface RegistroDePonto {
    colaboradorid: number,    
    horaEntrada: Date,
    horaSaida: Date,
    colaborador: Colaborador,

}