using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [Route("/")]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        
        public IActionResult Get()
        {
            var assembly = System.Reflection.Assembly.GetExecutingAssembly();
            var version = FileVersionInfo.GetVersionInfo(assembly.Location).FileVersion;
            return Ok(new
            {
                Version = version
            });
        }
        
        [HttpGet("verify")]
        public IActionResult Verify()
        {
            _logger.LogTrace("Trace from {HostName}", Environment.MachineName);
            _logger.LogDebug("Debug from {HostName}", Environment.MachineName);
            _logger.LogInformation("Info from {HostName}", Environment.MachineName);
            _logger.LogWarning("Warning from {HostName}", Environment.MachineName);
            _logger.LogCritical("Critical message from {HostName}", Environment.MachineName);
            _logger.LogError("Error from {HostName}", Environment.MachineName);
            return Ok();
        }
    }
}