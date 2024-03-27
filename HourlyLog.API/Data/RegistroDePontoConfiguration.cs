using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HourlyLog.API.Models.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HourlyLog.API.Data
{
    public class RegistroDePontoConfiguration : IEntityTypeConfiguration<RegistroDePonto>
    {
        public void Configure(EntityTypeBuilder<RegistroDePonto> builder)
        {
            builder.HasKey(registroDePonto => registroDePonto.IdRegistro);

            builder.HasOne(registroDePonto => registroDePonto.Colaborador)
                .WithMany(colaborador => colaborador.RegistroDePontos)
                .HasForeignKey(registroDePonto => registroDePonto.ColaboradorId);
        }
    }
}