using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class Apartments
    {
        [Key]
        public int apar_id { get; set; }
        public int num_floor { get; set; }
        public int num_apar { get; set; }
        public bool status { get; set; }
        public int block_id { get; set; }
        public int type_id { get;  set; }

    }
}
