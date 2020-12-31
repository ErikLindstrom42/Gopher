using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gopher.Repositories;
using Gopher.Models;
using Gopher.Data;

namespace Gopher.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoxController : ControllerBase
    {
        private readonly FoxRepository _foxRepository;
        

        public FoxController(ApplicationDbContext context)
        {
            _foxRepository = new FoxRepository(context);
            
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_foxRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var fox = _foxRepository.GetbyId(id);
            if (fox != null)
            {
                NotFound();
            }
            return Ok(fox);
        }




    }
}
