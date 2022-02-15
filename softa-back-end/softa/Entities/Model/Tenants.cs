using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class Tenants
    {
        [Key]
        public int tenant_id { get; set; }
        public string tc_id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string tel_no { get; set; }
        public string license_plate { get; set; }
        public bool status { get; set; }
        public int role_id { get; set; }
        public int apar_id { get; set; }



    }
}
