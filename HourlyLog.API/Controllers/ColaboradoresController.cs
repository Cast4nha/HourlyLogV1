using HourlyLog.API.Data;
using HourlyLog.API.Models.Domain;
using HourlyLog.API.Models.DTO;
using HourlyLog.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using System.ComponentModel;

namespace HourlyLog.API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class ColaboradoresController : ControllerBase
    {
        private readonly IColaboradorRepository colaboradorRepository;

        public ColaboradoresController(IColaboradorRepository colaboradorRepository)
        {
            this.colaboradorRepository = colaboradorRepository;
        }


        //
        [HttpPost]
        public async Task<IActionResult> cadastrarColaborador([FromBody]CadastrarColaboradorRequestDto request)
        {
            
            var colaborador = new Colaborador
            {
                Nome = request.Nome,
                Cargo = request.Cargo,
                Salario = request.Salario,
                Email = request.Email,
                Telefone = request.Telefone,
                Matricula = request.Matricula,
            };

            await colaboradorRepository.CreateAsync(colaborador);


            var resposta = new ColaboradorDto
            {
                Id = colaborador.Id,
                Nome = colaborador.Nome,
                Cargo = colaborador.Cargo,
                Salario = colaborador.Salario,
                Email = colaborador.Email,
                Telefone = colaborador.Telefone,
                Matricula = colaborador.Matricula,
            };
            return Ok(resposta);


        }

    
        [HttpGet]
        public async Task<IActionResult> GetAllColaboradores()
        {
            var colaboradores = await colaboradorRepository.GetAllAsync();

            // Map Domain Model to DTO
            var resposta = new List<ColaboradorDto>();
            foreach (var colaborador in colaboradores)
            {
                resposta.Add(new ColaboradorDto
                {
                    Id = colaborador.Id,
                    Nome = colaborador.Nome,
                    Cargo = colaborador.Cargo,
                    Salario = colaborador.Salario,
                    Email = colaborador.Email,
                    Telefone = colaborador.Telefone,
                    Matricula = colaborador.Matricula,
                });
            }

            return Ok(resposta);
        }
        [HttpGet]
        [Route("{id:int}")]

        public async Task<IActionResult> GetColaboradorById([FromRoute] int id) 
        {
            var existingColaborador = await colaboradorRepository.GetById(id);

            if (existingColaborador is null)
            {
                return NotFound();
            }

            var resposta = new ColaboradorDto
            {
                Id = existingColaborador.Id,
                Nome = existingColaborador.Nome,
                Cargo = existingColaborador.Cargo,
                Salario = existingColaborador.Salario,
                Email = existingColaborador.Email,
                Telefone = existingColaborador.Telefone,
                Matricula = existingColaborador.Matricula,

            };

            return Ok(resposta);
        }


        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> EditarColaborador([FromRoute] int id, AtualizarColaboradorRequestDto request)
        {
            // Converter DTO para Domain Model
            var colaborador = new Colaborador
            {
                Id = id,
                Nome = request.Nome,
                Cargo = request.Cargo,
                Salario = request.Salario,
                Email = request.Email,
                Telefone = request.Telefone,
                Matricula = request.Matricula,
            };

            colaborador = await colaboradorRepository.UpdateAsync(colaborador);

            if (colaborador == null)
            {
                return NotFound();
            }

          
            var response = new ColaboradorDto
            {
                Id = id,
                Nome = colaborador.Nome,
                Cargo = colaborador.Cargo,
                Salario = colaborador.Salario,
                Email = colaborador.Email,
                Telefone = colaborador.Telefone,
                Matricula = colaborador.Matricula,
            };

            return Ok(response);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeletarColaborador([FromRoute] int id)
        {
            var colaborador = await colaboradorRepository.DeleteAsync(id);

            if (colaborador == null)
            {
                return NotFound();
            }

            var response = new ColaboradorDto
            {
                Id = id
            };
            return Ok(response);
        }

    }
}
