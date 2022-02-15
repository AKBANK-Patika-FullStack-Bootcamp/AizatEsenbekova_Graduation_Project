using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Entities.Model;
using DAL;

namespace softa.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlockDbOperationsController : ControllerBase
    {
        private SoftaContext _context = new SoftaContext();


        [HttpGet]
        //Get list of all blocks
        public List<Block> GetBlocks()
        {
            List<Block> resultList = new List<Block>();
            resultList = _context.Block.ToList();
            return resultList;
        }

        [HttpGet("{id}")]
        //Get one block by id
        public Block GetBlock(int id)
        {
            Block result = new Block();
            result = _context.Block.FirstOrDefault(x => x.block_id == id);
            return result;
        }
    

        [HttpPost]
        //return message after process
        public string AddBlock(Block _block)
        {
            //is block already in database?
            
            bool check = _context.Block.Contains(_block);
            if (check == true)
            {
                return "Block is already exists";
            }
            else
            {
                _context.Block.Add(_block);
                _context.SaveChanges();
                return "Block added to database successfully";
            }
        }

        [HttpDelete("{id}")]
        //Delete block from database

        public String DeleteBlock(int id)
        {
            Block? _block = new Block();
            //search block from database
            _block = _context.Block.FirstOrDefault(x =>x.block_id == id);
            if (_block == null)
            {
                return "Block is not already registered";
            }
            else
            {
                //remove block 
                _context.Block.Remove(_block);
                _context.SaveChanges();
                return "Block deleted  succesfully";
            }

        }
    }
}