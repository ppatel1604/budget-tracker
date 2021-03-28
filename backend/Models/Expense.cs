using System;

namespace backend.Models
{
    public class Expense
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public double Cost { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}