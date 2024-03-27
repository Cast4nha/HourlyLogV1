using HourlyLog.API.Models.Domain;
using HourlyLog.API.Models.DTO;
using HourlyLog.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HourlyLog.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistroDePontoController : ControllerBase
    {
        private readonly IRegistroDePontoRepository registroDePontoRepository;

        public RegistroDePontoController(IRegistroDePontoRepository registroDePontoRepository)
        {
            this.registroDePontoRepository = registroDePontoRepository;
        }

        [HttpPost]
        public async Task<IActionResult> AdicionarRegistroDePonto([FromBody] AdicionarRegistroDePontoRequestDto request)
        {

            var registroDePonto = new RegistroDePonto
            {
                ColaboradorId = request.ColaboradorId,
                HoraEntrada = request.HoraEntrada,
                HoraSaida = request.HoraSaida,
            };

            registroDePonto = await registroDePontoRepository.AdicionarAsync(registroDePonto);

            var response = new RegistroDePontoDto
            {
                IdRegistro = registroDePonto.IdRegistro,
                ColaboradorId = registroDePonto.ColaboradorId,
                HoraEntrada = registroDePonto.HoraEntrada,
                HoraSaida = registroDePonto.HoraSaida
            };

            return Ok();
        }

        //GET
        [HttpGet]
        public async Task<IActionResult> GetAllRegistrosDePonto()
        {
            var registrosDePonto = await registroDePontoRepository.GetAllAsync();

            var response = new List<RegistroDePontoDto>();
            foreach (var registroDePonto in registrosDePonto)
            {
                response.Add(new RegistroDePontoDto
                {
                    IdRegistro = registroDePonto.IdRegistro,
                    ColaboradorId = registroDePonto.ColaboradorId,
                    HoraEntrada = registroDePonto.HoraEntrada,
                    HoraSaida = registroDePonto.HoraSaida,
                    Colaborador = new ColaboradorDto() 
                    { 
                        Nome = registroDePonto.Colaborador.Nome,
                    } 
                });
            }
            return Ok(response);
        }
    }
}
