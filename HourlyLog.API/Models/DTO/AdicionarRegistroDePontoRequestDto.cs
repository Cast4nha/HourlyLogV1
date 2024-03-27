using HourlyLog.API.Models.Domain;
using System.ComponentModel.DataAnnotations;

namespace HourlyLog.API.Models.DTO
{
    public class AdicionarRegistroDePontoRequestDto { 
            public int ColaboradorId { get; set; }
            public DateTime HoraEntrada { get; set; }
            public DateTime HoraSaida { get; set; }
        }
    }



