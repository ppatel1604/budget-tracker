using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("/")]
    public class HomeController : Controller
    {
        public IActionResult Get()
        {
            var assembly = System.Reflection.Assembly.GetExecutingAssembly();
            var version = FileVersionInfo.GetVersionInfo(assembly.Location).FileVersion;
            return Ok(new
            {
                Version = version
            });
        }
    }
}