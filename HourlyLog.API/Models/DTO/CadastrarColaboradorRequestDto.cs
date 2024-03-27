namespace HourlyLog.API.Models.DTO
{
    public class CadastrarColaboradorRequestDto
    {
        public string Nome { get; set; }

        public string Cargo { get; set; }

        public Decimal Salario { get; set; }

        public string Email { get; set; }

        public string Telefone { get; set; }

        public string Matricula { get; set; }
    }
}
