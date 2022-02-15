using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class TenantDetails
    {
        public string name { get; set;}
        public string surname { get; set; }
        public string tc_id { get; set; }
        public string email { get; set;}
        public string tel_no { get; set; } 
        public string license_plate { get; set; }
        public int block_id { get; set; }
        public string block_name { get; set; }
        public int apart_no { get; set; }
        public int floor { get; set; }
    }
}
