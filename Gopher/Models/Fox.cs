
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gopher.Models
{
    public class Fox
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(255)]
        public string Image { get; set; }

        [Required]
        [MaxLength(255)]
        public string Link { get; set; }
    }
}
