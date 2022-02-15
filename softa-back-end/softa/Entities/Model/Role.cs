using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class Role
    {
        [Key]
        public int role_id { get; set; }
        public string role_name { get; set; }
    }
}
