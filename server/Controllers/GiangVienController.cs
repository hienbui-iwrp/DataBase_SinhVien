using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace DataBase_SinhVien.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GiangVienController : ControllerBase
    {
        [HttpGet]
        public async Task<List<GiangVien>> GetAllGiangVien()
        {
            string query = @"SELECT MSCB, Ho, Ten, ChuyenMon, GioiTinh, NgaySinh, HocHam, MaKhoa FROM GiangVien;";

            DataTable data = await SqlExecutes.Instance.ExecuteQuery(query);

            return data.ConvertToList<GiangVien>();
        }
    }
}