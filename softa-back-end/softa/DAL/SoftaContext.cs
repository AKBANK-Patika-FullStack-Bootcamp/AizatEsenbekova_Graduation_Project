using Entities.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace DAL
{
    public class SoftaContext:DbContext
    {
        protected readonly IConfiguration Configuration;
        public SoftaContext()
        {
            //constructor for this class
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            //connect with sql server
            options.UseSqlServer("Data Source=BOSSLADY\\AIZATSQL; Database=softa; integrated security=True;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //matching with tables
            modelBuilder.Entity<Role>().ToTable("role");
            modelBuilder.Entity<Block>().ToTable("block");
            modelBuilder.Entity<Type_Rooms>().ToTable("type_rooms");
            modelBuilder.Entity<Apartments>().ToTable("apartments");
            modelBuilder.Entity<Tenants>().ToTable("tenants");
            modelBuilder.Entity<Hiring_details>().ToTable("hr_details");
     
        }

        public DbSet<Role> Role { get; set; }
        public DbSet<Block> Block { get; set; }
        public DbSet<Type_Rooms> Type_Rooms { get; set; }
        public DbSet<Apartments> Apartments { get; set; }
        public DbSet<Tenants> Tenants { get; set; }
        public DbSet<Hiring_details> Hiring_details { get; set; }


    }
}