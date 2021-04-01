using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data;
using backend.Exceptions;
using backend.Models;
using Microsoft.Extensions.Logging;

namespace backend.Repositories
{
    public class ExpenseRepository: IExpenseRepository
    {
        private readonly ExpenseDbContext _context;
        private readonly ILogger<ExpenseRepository> _logger;

        public ExpenseRepository(ExpenseDbContext context, ILogger<ExpenseRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<IEnumerable<Expense>> GetAllAsync() => await Task.Run(() => _context.Expenses);

        public async Task<Expense> GetAsync(Guid id) => await _context.Expenses.FindAsync(id);

        public async Task CreateAsync(Expense expense)
        {
            await _context.Expenses.AddAsync(expense);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Expense expense)
        {
            var existingExpense = await _context.Expenses.FindAsync(expense.Id);
            if (existingExpense == null)
            {
                const string exceptionMessage = "Expense not found!"; 
                _logger.LogError(exceptionMessage);
                throw new AppException(exceptionMessage);
            }

            existingExpense.Name = expense.Name;
            existingExpense.Cost = expense.Cost;
            existingExpense.CreatedAt = DateTime.UtcNow;
            _context.Update(existingExpense);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid id)
        {
            var existingExpense = await _context.Expenses.FindAsync(id);
            if (existingExpense == null)
            {
                const string exceptionMessage = "Expense not found!"; 
                _logger.LogError(exceptionMessage);
                throw new AppException(exceptionMessage);
            }

            _context.Expenses.Remove(existingExpense);
            await _context.SaveChangesAsync();
        }
    }
}