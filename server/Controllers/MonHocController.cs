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
    public class MonHocController : ControllerBase
    {
        [HttpGet]
        public async Task<List<MonHoc>> GetAllMonHoc()
        {
            string query = @"SELECT MaMonHoc, Ten, TinChi, HeSoBtl, HeSoBt, HeSoKt, HeSoTn, HeSoThi FROM MonHoc;";

            DataTable data = await SqlExecutes.Instance.ExecuteQuery(query);

            return data.ConvertToList<MonHoc>();
        }

        [HttpGet("nhommon")]
        public async Task<List<NhomMon>> GetAllNhomMon()
        {
            string query = @"SELECT MaNhom, KiHoc, NgayTrongTuan, TietBatDau, TietKetThuc, MSCB, MaMonHoc, SoLuong FROM NhomMon;";

            DataTable data = await SqlExecutes.Instance.ExecuteQuery(query);

            return data.ConvertToList<NhomMon>();
        }
        [HttpGet("hocmon")]
        public async Task<List<HocMon>> GetAllHocMoc()
        {
            string query = @"SELECT MSSV, TenPhong, MaNhom, MaMonHoc, KiHoc FROM HocMon;";

            DataTable data = await SqlExecutes.Instance.ExecuteQuery(query);

            return data.ConvertToList<HocMon>();
        }
    }
}