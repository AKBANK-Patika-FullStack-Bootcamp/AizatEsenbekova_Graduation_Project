using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Entities.Model;
using DAL;

namespace softa.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TenantDbOperationsController : ControllerBase
    {
        private SoftaContext _context = new SoftaContext();


        [HttpGet]
        //Get list of all Tenants
        public List<Tenants> GetTenants()
        {
            List<Tenants> resultList = new List<Tenants>();
            resultList = _context.Tenants.ToList();
            return resultList;
        }

        [HttpGet("{id}")]
        //Get one Tenant by id
        public Tenants GetTenant(int id)
        {
            Tenants result = new Tenants();
            result = _context.Tenants.FirstOrDefault(x => x.tenant_id == id);
            return result;
        }


        [HttpPost]
        //return message after process
        public string AddTenant(Tenants tenant)
        {
            //is Tenant already in database

            bool check = _context.Tenants.Contains(tenant);
            if (check == true)
            {
                return "Tenant is already exists";
            }
            else
            {
                _context.Tenants.Add(tenant);
                _context.SaveChanges();
                return "Tenant added to database successfully";
            }
        }

        [HttpDelete("{id}")]
        //Delete Tenant from database

        public String DeleteTenant(int id)
        {
            Tenants? tenant = new Tenants();
            //search tenant from database
            tenant = _context.Tenants.FirstOrDefault(x => x.tenant_id == id);
            if (tenant == null)
            {
                return "Tenant is not already registered";
            }
            else
            {
                //remove tenant 
                _context.Tenants.Remove(tenant);
                _context.SaveChanges();
                return "Tenant deleted  succesfully";
            }

        }

        [HttpPut("{id}")]

        public string UpdateTenant(Tenants newValue,int id)
        {
            //find tenant from database
            Tenants? oldValue = new Tenants();
            oldValue = _context.Tenants.FirstOrDefault(y => y.tenant_id == id);
            if (oldValue == null)
            {
                return "This tenant is not in the database";
            }
            else
            {
                oldValue.name = newValue.name;
                oldValue.surname = newValue.surname;
                oldValue.email = newValue.email;
                oldValue.password = newValue.password;
                oldValue.tel_no= newValue.tel_no;
                oldValue.license_plate = newValue.license_plate;
                oldValue.role_id = newValue.role_id;
                oldValue.apar_id = newValue.apar_id;
                _context.SaveChanges();
                return "Tenants's information updates successfully";

            }

        }

    }
}