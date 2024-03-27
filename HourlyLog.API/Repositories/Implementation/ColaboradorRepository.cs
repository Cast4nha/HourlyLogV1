using HourlyLog.API.Data;
using HourlyLog.API.Models.Domain;
using HourlyLog.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace HourlyLog.API.Repositories.Implementation
{
    public class ColaboradorRepository : IColaboradorRepository
    {
        private readonly ApplicationDbContext dbContext;

        public ColaboradorRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<Colaborador> CreateAsync(Colaborador colaborador)
        {
            await dbContext.Colaboradores.AddAsync(colaborador);
            await dbContext.SaveChangesAsync();

            return colaborador;
        }

        public async Task<Colaborador?> DeleteAsync(int id)
        {
            var existingColaborador = await dbContext.Colaboradores.FirstOrDefaultAsync(x => x.Id == id) ;


            if (existingColaborador is null)
            {
                return null;
            }

            dbContext.Colaboradores.Remove(existingColaborador);
            await dbContext.SaveChangesAsync();
            return existingColaborador;
        }

        public async Task<IEnumerable<Colaborador>> GetAllAsync()
        {
           return await dbContext.Colaboradores.ToListAsync();
        }

        public async Task<Colaborador?> GetById(int id) 
        { 
             return await dbContext.Colaboradores.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Colaborador?> UpdateAsync(Colaborador colaborador)
        {
            var existingColaborador = await dbContext.Colaboradores.FirstOrDefaultAsync(x => x.Id == colaborador.Id);

            if (existingColaborador != null)
            {
                dbContext.Entry(existingColaborador).CurrentValues.SetValues(colaborador);
                await dbContext.SaveChangesAsync();
                return colaborador;
            }

            return null;
        }
    }
}
