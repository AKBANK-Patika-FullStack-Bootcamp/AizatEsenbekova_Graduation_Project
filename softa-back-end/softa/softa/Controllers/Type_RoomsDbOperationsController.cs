using Entities.Model;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace softa.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Type_RoomsDbOperationsController : ControllerBase
    {
        private SoftaContext _context = new SoftaContext();

      
        [HttpGet]
        //Get list of all blocks
        public List<Type_Rooms> GetBlocks()
        {
            List<Type_Rooms> resultList = new List<Type_Rooms>();
            resultList = _context.Type_Rooms.ToList();
            return resultList;
        }

        [HttpGet("{id}")]
        //Get one block by id
        public Type_Rooms GetBlock(int id)
        {
            Type_Rooms result = new Type_Rooms();
            result = _context.Type_Rooms.FirstOrDefault(x => x.type_id == id);
            return result;
        }
    }
}