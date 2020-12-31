
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Gopher.Data;
using Gopher.Models;

namespace Gopher.Repositories
{
    public class FoxRepository
    {
        private readonly ApplicationDbContext _context;

        public FoxRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Fox> GetAll()
        {
            return _context.Fox
                .ToList();
        }

        public object GetbyId(int id)
        {
            return _context.Fox
                .FirstOrDefault(f => f.Id == id);
        }

    }
}