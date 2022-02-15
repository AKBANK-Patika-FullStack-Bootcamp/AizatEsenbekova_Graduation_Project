using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class Block
    {
     [Key]
        public int block_id { get; set; }
        public string block_name { get; set; }
        public int num_flats { get; set; }
        public int num_floors { get; set; }
    }
}
