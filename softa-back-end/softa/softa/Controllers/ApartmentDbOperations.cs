using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Entities.Model;
using DAL;

namespace softa.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApartmentDbOperationsController : ControllerBase
    {
        private SoftaContext _context = new SoftaContext();


        [HttpGet]
        //Get list of all apartments
        public List<Apartments> GetApartments()
        {
            List<Apartments> resultList = new List<Apartments>();
            resultList = _context.Apartments.ToList();
            return resultList;
        }

        [HttpGet("{id}")]
        //Get one apartment by id
        public List<Apartments> GetApartment(int id)
        {
            List<Apartments> result = new List<Apartments>();
            result = _context.Apartments.Where(x => x.block_id == id && x.status==false).ToList();
            return result;
        }


        [HttpPost]
        //return message after process
        public string AddApartment(Apartments apartment)
        {
            //is apartment already in database

            bool check = _context.Apartments.Contains(apartment);
            if (check == true)
            {
                return "Apartment is already exists";
            }
            else
            {
                _context.Apartments.Add(apartment);
                _context.SaveChanges();
                return "Apartment added to database successfully";
            }
        }

        [HttpDelete("{id}")]
        //Delete apartment from database
        //get by block id

        public String DeleteApartment(int id)
        {
            Apartments? apartment = new Apartments();
            //search apartment from database
            apartment = _context.Apartments.FirstOrDefault(x => x.apar_id == id);
            if (apartment == null)
            {
                return "Apartment is not already registered";
            }
            else
            {
                //remove apartment 
                _context.Apartments.Remove(apartment);
                _context.SaveChanges();
                return "Apartment deleted  succesfully";
            }

        }
    }
}