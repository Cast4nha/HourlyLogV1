using HourlyLog.API.Models.Domain;

namespace HourlyLog.API.Models.DTO
{
    public class RegistroDePontoDto
    {
        public int IdRegistro { get; set; }
        public int ColaboradorId { get; set; }
        
        public DateTime HoraEntrada { get; set; }

        public DateTime HoraSaida { get; set; }

        public ColaboradorDto Colaborador { get; set; }

    }


}
