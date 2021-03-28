using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class ExpenseDbContext : DbContext
    {
        public ExpenseDbContext(DbContextOptions<ExpenseDbContext> options): base(options)
        {
            
        }
        
        public DbSet<Expense> Expenses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Expense>().ToTable(nameof(Expenses))
                .HasKey(k => k.Id);
        }
    }
}