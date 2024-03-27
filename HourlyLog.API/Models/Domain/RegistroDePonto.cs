using System;
using System.ComponentModel.DataAnnotations;

namespace HourlyLog.API.Models.Domain
{
    public class RegistroDePonto
    {
        public int IdRegistro { get; set; }
        public int ColaboradorId { get; set; }
        public DateTime HoraEntrada { get; set; }
        public DateTime HoraSaida { get; set; }

        public Colaborador Colaborador { get; set; }
    }
}