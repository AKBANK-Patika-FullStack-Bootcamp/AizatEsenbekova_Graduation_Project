using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class Type_Rooms
    {
        [Key]
        public int type_id { get; set; }
        public string type_name { get; set; }
    }
}
