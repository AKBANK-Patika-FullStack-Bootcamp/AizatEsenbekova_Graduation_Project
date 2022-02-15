
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Entities.Model;
using DAL;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Linq;

namespace softa.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApartmentDetailsWithConditionController : ControllerBase
    {


        private SoftaContext _context = new SoftaContext();


        [HttpGet("{block_id}/{floor}")]
        //Get list of all roles
        public List<ApartmentDetails> GetDetails(int block_id, int floor)
        {
            List<ApartmentDetails> a = new List<ApartmentDetails>();
            List<ApartmentDetails> adetail1 = new List<ApartmentDetails>();
            var adetail = _context.Apartments.Join(_context.Block, a => a.block_id,
            b => b.block_id,
            (adetail, _block) => new { adetail, _block })
            .Join(_context.Type_Rooms, a => a.adetail.type_id, t => t.type_id,
            (adetail, _type_room) => new { adetail, _type_room })
            .Join(_context.Hiring_details, a => a.adetail.adetail.apar_id, p => p.apar_id,
            (adetail, hiring) => new { adetail, hiring })
            .Join(_context.Tenants, p => p.hiring.tenant_id, k => k.tenant_id,
            (hiring, tenant)
             => new ApartmentDetails
             {
                 block_id = hiring.adetail.adetail._block.block_id,
                 block_name = hiring.adetail.adetail._block.block_name,
                 floor_num = hiring.adetail.adetail.adetail.num_floor,
                 apart_num = hiring.adetail.adetail.adetail.num_apar,
                 type_name = hiring.adetail._type_room.type_name,
                 r_name = tenant.name,
                 r_surname = tenant.surname
             }).Where(a => a.block_id == block_id && a.floor_num==floor); 

            adetail1 = (List<ApartmentDetails>)adetail.ToList();
            return adetail1;
        }
    }
}
//.
