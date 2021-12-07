using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
//using ProjetoMN.Service;
using ProjetoMN.Domain;
using System.Net.Http;
using System.Net.Http.Headers;
using ProjetoMN.API.Abstractions;
using Refit;

namespace ProjetoMN.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController : ControllerBase
  {


    [HttpGet]
    
    public async Task<ActionResult> GetPessoas()
    {
       var api = RestService
                 .For<IPessoasApi>("https://gorest.co.in/");
       return Ok(await api.GetPessoas());

    }
     
  }    
}

  
        
