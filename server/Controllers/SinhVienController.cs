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
    public class SinhVienController : ControllerBase
    {
        [HttpGet]
        public async Task<List<SinhVien>> GetAllStudent()
        {
            string query = "SELECT MSSV, Ho, Ten, TinhTrang, NgaySinh, GioiTinh, HoKhau, MaKhoa AS Khoa FROM SinhVien;";

            DataTable data = await SqlExecutes.Instance.ExecuteQuery(query);

            return data.ConvertToList<SinhVien>();
        }

        [HttpGet("khoa")]
        public async Task<List<string>> GetAllFaculty()
        {
            string query = "SELECT MaKhoa FROM Khoa;";

            DataTable data = await SqlExecutes.Instance.ExecuteQuery(query);

            List<string> strs = new List<string>();

            foreach (DataRow item in data.Rows)
            {
                strs.Add(item["MaKhoa"].ToString());
            }

            return strs;
        }
    }
}