﻿using Microsoft.EntityFrameworkCore;

namespace BeHealthBackend.Entities
{
    public class BeHealthContext : DbContext
    {
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Clinic> Clinics { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Visit> Visits { get; set; }

    }
}
