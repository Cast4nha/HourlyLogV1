using HourlyLog.API.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace HourlyLog.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) 
        {
        }

        public DbSet<Colaborador> Colaboradores { get; set; }

        public DbSet<RegistroDePonto> RegistrosDeponto { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new RegistroDePontoConfiguration());
        }
    }
}
