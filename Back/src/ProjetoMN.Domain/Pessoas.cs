using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;


namespace ProjetoMN.Domain
{
    
    public class Pessoas
    {
    
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string Status { get; set; }
    }
    public class Response{
        public List<Pessoas> Data { get; set; }
    }
}

        

        

        

        

        
        