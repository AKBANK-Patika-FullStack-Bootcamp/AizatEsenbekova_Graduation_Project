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
    public class TenantDetailsDbOperationsController : ControllerBase
    {

        private SoftaContext _context = new SoftaContext();

        [HttpGet]
    
        public List<TenantDetails> GetDetails()
        {

            List<TenantDetails> resultTenant = new List<TenantDetails>();
            var tenant = _context.Tenants.Join(_context.Apartments, t => t.apar_id,
            a => a.apar_id,
            (tenant, apart) => new { tenant, apart })
            .Join(_context.Block, a => a.apart.block_id, b => b.block_id,
            (apart, block)
             => new TenantDetails
             {
                 name = apart.tenant.name,
                 surname = apart.tenant.surname,
                 tc_id = apart.tenant.tc_id,
                 email = apart.tenant.email,
                 tel_no = apart.tenant.tel_no,
                 license_plate = apart.tenant.license_plate,
                 block_id = block.block_id,
                 block_name = block.block_name,
                 apart_no = apart.apart.apar_id,
                 floor = apart.apart.num_floor
             });

            resultTenant = (List<TenantDetails>)tenant.ToList();
            return resultTenant;
        }

        [HttpGet("{block_id}/{floor}")]
      
        public List<TenantDetails> GetDetails(int block_id, int floor)
        {

            List<TenantDetails> resultTenant = new List<TenantDetails>();
            var tenant = _context.Tenants.Join(_context.Apartments, t => t.apar_id,
            a => a.apar_id,
            (tenant, apart) => new { tenant, apart })
            .Join(_context.Block, a => a.apart.block_id, b => b.block_id,
            (apart, block)
             => new TenantDetails
             {
                 name = apart.tenant.name,
                 surname = apart.tenant.surname,
                 tc_id = apart.tenant.tc_id,
                 email = apart.tenant.email,
                 tel_no = apart.tenant.tel_no,
                 license_plate = apart.tenant.license_plate,
                 block_id=block.block_id,
                 block_name = block.block_name,
                 apart_no = apart.apart.apar_id,
                 floor=apart.apart.num_floor
             }).Where(a=>a.block_id==block_id && a.floor==floor);

            resultTenant = (List<TenantDetails>)tenant.ToList();
            return resultTenant;
        }

        [HttpGet("{block_id}")]
   
        public List<TenantDetails> GetDetails(int block_id)
        {

            List<TenantDetails> resultTenant = new List<TenantDetails>();
            var tenant = _context.Tenants.Join(_context.Apartments, t => t.apar_id,
            a => a.apar_id,
            (tenant, apart) => new { tenant, apart })
            .Join(_context.Block, a => a.apart.block_id, b => b.block_id,
            (apart, block)
             => new TenantDetails
             {
                 name = apart.tenant.name,
                 surname = apart.tenant.surname,
                 tc_id = apart.tenant.tc_id,
                 email = apart.tenant.email,
                 tel_no = apart.tenant.tel_no,
                 license_plate = apart.tenant.license_plate,
                 block_id = block.block_id,
                 block_name = block.block_name,
                 apart_no = apart.apart.apar_id,
                 floor = apart.apart.num_floor
             }).Where(a => a.block_id == block_id );

            resultTenant = (List<TenantDetails>)tenant.ToList();
            return resultTenant;
        }
    }
}
