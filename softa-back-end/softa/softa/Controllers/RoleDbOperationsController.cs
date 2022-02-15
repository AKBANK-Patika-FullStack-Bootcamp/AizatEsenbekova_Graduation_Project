using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Entities.Model;
using DAL;

namespace softa.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RoleDbOperationsController : ControllerBase
    {
        List<Role> resultList = new List<Role>();
        private SoftaContext _context = new SoftaContext();
      

        [HttpGet]
        //Get list of all roles
        public List<Role> GetRoles()
        {
            List<Role> resultList = new List<Role>();
            resultList = _context.Role.ToList();
            return resultList;
        }
    }
}