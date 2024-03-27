using HourlyLog.API.Models.Domain;
using System.ComponentModel;

namespace HourlyLog.API.Repositories.Interface
{
    public interface IColaboradorRepository
    {
        Task<Colaborador> CreateAsync(Colaborador colaborador);

        Task<IEnumerable<Colaborador>> GetAllAsync();

        Task<Colaborador?> GetById(int id);

        Task<Colaborador?> UpdateAsync(Colaborador colaborador);

        Task<Colaborador?> DeleteAsync(int id);
    }
}
