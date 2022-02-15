using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Entities.Model;
using DAL;

namespace softa.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Hiring_detailsDbOperationsController : ControllerBase
    {
        private SoftaContext _context = new SoftaContext();


        [HttpGet]
        //Get list of all Hiring_details
        public List<Hiring_details> GetHiring_details()
        {
            List<Hiring_details> resultList = new List<Hiring_details>();
            resultList = _context.Hiring_details.ToList();
            return resultList;
        }

        [HttpGet("{id}")]
        //Get one hiring detail by id
        public Hiring_details GetHiring_detail(int id)
        {
            Hiring_details result = new Hiring_details();
            result = _context.Hiring_details.FirstOrDefault(x => x.hire_id == id);
            return result;
        }


    }
}