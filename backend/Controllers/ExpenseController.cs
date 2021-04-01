using System;
using System.Net;
using System.Threading.Tasks;
using backend.Exceptions;
using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [Route("[controller]")]
    public class ExpenseController : Controller
    {
        private readonly IExpenseRepository _expenseRepository;
        private readonly ILogger<ExpenseController> _logger;

        public ExpenseController(IExpenseRepository expenseRepository, ILogger<ExpenseController> logger)
        {
            _expenseRepository = expenseRepository;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var expenses = await _expenseRepository.GetAllAsync();
            return Ok(expenses);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync([FromRoute]Guid id)
        {
            var expense = await _expenseRepository.GetAsync(id);
            if (expense == null)
            {
                _logger.LogInformation($"No expense exist with id:{id}");
            }
            return Ok(expense);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync([FromBody]Expense expense)
        {
            if (string.IsNullOrWhiteSpace(expense.Name) || expense.Cost == 0)
            {
                const string message = "Please provide name and cost for the expense";
                _logger.LogError(message, expense);
                return BadRequest(message);
            }

            if (!expense.CreatedAt.HasValue)
            {
                _logger.LogInformation("Created date for expense has not been provided so current date will be used");
                expense.CreatedAt = DateTime.UtcNow;
            }

            await _expenseRepository.CreateAsync(expense);
            return Created(
                nameof(GetByIdAsync),
                expense
            );
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync([FromRoute]Guid id)
        {
            if (id == Guid.Empty)
            {
                const string message = "Please provide id to remove an expense";
                _logger.LogError(message);
                return BadRequest(message);
            }

            try
            {
                await _expenseRepository.DeleteAsync(id);
                return NoContent();
            }
            catch (AppException)
            {
                return BadRequest("Provided id for an expense is not correct");
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message, e);
                return StatusCode((int) HttpStatusCode.InternalServerError);
            }
        }
    }
}