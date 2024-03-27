using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace HourlyLog.API.Models.Domain
{
    public class Colaborador
    {
        [Key]
        public int Id { get; set; }
        
        public string Nome { get; set; }

        public string Cargo { get; set; }

        public Decimal Salario { get; set; }

        public string Email {  get; set; }   

        public string Telefone { get; set; }

        public string Matricula { get; set; }

        public ICollection<RegistroDePonto> RegistroDePontos { get; set; }

    }
}
