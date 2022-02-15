using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Model
{
    public class ApartmentDetails
    {
        public int block_id { get; set; }
        public string block_name { get; set; }
        public int floor_num { get; set; }
        public int apart_num { get; set; }
        public string type_name { get; set; }
        public string r_name { get; set; }
        public string r_surname { get; set; }

        public static explicit operator ApartmentDetails(List<object> v)
        {
            throw new NotImplementedException();
        }
    }
}
