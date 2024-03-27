using HourlyLog.API.Data;
using HourlyLog.API.Models.Domain;
using HourlyLog.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace HourlyLog.API.Repositories.Implementation
{
    public class RegistroDePontoRepository : IRegistroDePontoRepository
    {
        private readonly ApplicationDbContext dbContext;
        public RegistroDePontoRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<RegistroDePonto> AdicionarAsync(RegistroDePonto registroDePonto)
        {
            await dbContext.RegistrosDeponto.AddAsync(registroDePonto);
            await dbContext.SaveChangesAsync();
            return registroDePonto;
        }

        public async Task<IEnumerable<RegistroDePonto>> GetAllAsync()
        {
           return await dbContext.RegistrosDeponto.Include(registroDePonto => registroDePonto.Colaborador ).ToListAsync();
        }
    }
}
