using HourlyLog.API.Models.Domain;

namespace HourlyLog.API.Repositories.Interface
{
    public interface IRegistroDePontoRepository
    {
       Task<RegistroDePonto> AdicionarAsync(RegistroDePonto registroDePonto);

        Task<IEnumerable<RegistroDePonto>> GetAllAsync();
    }
}
