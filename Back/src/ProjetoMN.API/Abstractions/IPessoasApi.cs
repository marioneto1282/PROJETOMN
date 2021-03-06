using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjetoMN.Domain;
using Refit;

namespace ProjetoMN.API.Abstractions
{


    public interface IPessoasApi
    {
      [Get("/public/v1/users")]  

      Task<Response> GetPessoas();
    }

    public interface IPessoasByNameApi
    {
       [Get("/public/v1/users?name={name}")]  
        Task<Response> GetAllPessoasByName(string name, bool includePessoas = false);
    }
      
      
}