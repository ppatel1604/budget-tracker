using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Controllers;
using backend.Models;
using backend.Repositories;
using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace backend.Tests.Controllers
{
    public class ExpenseControllerTests
    {
        private readonly Mock<IExpenseRepository> _expenseRepositoryMock;
        private readonly Mock<ILogger<ExpenseController>> _loggerMock;

        public ExpenseControllerTests()
        {
            _expenseRepositoryMock = new Mock<IExpenseRepository>();
            _loggerMock = new Mock<ILogger<ExpenseController>>();
        }
        
        [Fact]
        public async Task GetAsync_Should_Return_Ok_Result_With_Empty_Result_When_Repository_Returns_Empty_List()
        {
            //Arrange
            var expectedValue = new List<Expense>();
            
            _expenseRepositoryMock.Setup(s => s.GetAllAsync()).ReturnsAsync(expectedValue);
            
            //Act
            var subject = CreateSubject();
            var result = await subject.GetAsync();
            
            //Assert
            result.Should().BeOfType<OkObjectResult>();
            var resultObject = result as OkObjectResult;
            resultObject!.StatusCode.Should().Be(StatusCodes.Status200OK);
            resultObject.Value.Should().BeEquivalentTo(expectedValue);
        }

        [Fact]
        public async Task GetAsync_Should_Return_Ok_Result_With_Correct_Expenses()
        {
            //Arrange
            var expectedExpenseList = new List<Expense>
            {
                new()
                {
                    Id = default,
                    Name = null,
                    Cost = 0,
                    CreatedAt = null
                },
                new()
                {
                    Id = default,
                    Name = null,
                    Cost = 0,
                    CreatedAt = null
                }
            };

            _expenseRepositoryMock.Setup(s => s.GetAllAsync()).ReturnsAsync(expectedExpenseList);
            
            //Act
            var subject = CreateSubject();
            var result = await subject.GetAsync();
            
            //Assert
            result.Should().BeOfType<OkObjectResult>();
            var resultObject = result as OkObjectResult;
            resultObject!.StatusCode.Should().Be(StatusCodes.Status200OK);
            resultObject.Value.Should().BeEquivalentTo(expectedExpenseList);
        }

        [Fact]
        public async Task GetByIdAsync_Should_Log_A_Message_When_Repository_Returns_Null()
        {
            //Arrange
            _expenseRepositoryMock.Setup(s => s.GetAsync(It.IsAny<Guid>())).ReturnsAsync((Expense)null);
            
            //Act
            var subject = CreateSubject();
            var result = await subject.GetByIdAsync(It.IsAny<Guid>());
            
            //Assert
            result.Should().BeOfType<OkObjectResult>();
            var resultObject = result as OkObjectResult;
            resultObject!.StatusCode.Should().Be(StatusCodes.Status200OK);
            
            _loggerMock.Verify(l => l.Log(
                LogLevel.Information, 
                It.IsAny<EventId>(), 
                It.IsAny<string>(), 
                It.IsAny<Exception>(), 
                It.IsAny<Func<string,Exception,string>>()
                ), Times.Once);
        }

        private ExpenseController CreateSubject()
        {
            return new ExpenseController(_expenseRepositoryMock.Object, _loggerMock.Object);
        }
    }
}