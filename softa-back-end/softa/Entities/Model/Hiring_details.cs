using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class Hiring_details
    {
     [Key]
        public int hire_id { get; set; }
        public int apar_id { get; set; }
        public DateTime start_date { get; set; }
        public DateTime finish_date { get; set; }
        public int tenant_id { get; set; }
    }
}
