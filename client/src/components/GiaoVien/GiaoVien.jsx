import React, { useEffect, useState } from "react";
import GiaoViens from "./Giaoviens";

const GiaoVien = () => {
    const [sex, setsex] = useState("Giới tính");
    const [search, setsearch] = useState("");
    const [Faculties, setFaculties] = useState([]);
    const [faculty, setfaculty] = useState("Khoa");
    const [TeacherTemp, setTeacherTemp] = useState({});
    const [Teachers, setTeachers] = useState([]);

    const InsertGiaoVien = () => {};

    const fetchData = () => {        
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("https://localhost:5001/api/giangvien", requestOptions)
            .then((response) => response.json())
            .then((result) => setTeachers(result))
            .catch((error) => console.log("error", error));
        
        fetch("https://localhost:5001/api/sinhvien/khoa", requestOptions)
            .then((response) => response.json())
            .then((result) => setFaculties(result))
            .catch((error) => console.log("error", error));};

    useEffect(() => {
        
fetchData();
        
    }, []);

    return (
        <>
            <div className="student">
                <div className="student-header">
                    <input
                        type="text"
                        placeholder="Search mscb, tên"
                        onChange={(e) => setsearch(e.target.value)}
                    />
                    <select
                        name="Khoa"
                        id="Khoa"
                        onChange={(e) => setfaculty(e.target.value)}
                    >
                        <option value="Khoa">Khoa</option>
                        {Faculties.map((faculty, index) => {
                            return (
                                <option key={index} value={faculty}>
                                    {faculty}
                                </option>
                            );
                        })}
                    </select>
                    <select
                        name=""
                        id=""
                        onChange={(e) => setsex(e.target.value)}
                    >
                        <option value="Giới tính">Giới tính</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Khác">Khác</option>
                    </select>
                </div>
                <form className="student-list" onSubmit={InsertGiaoVien}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">MSCB</th>
                                <th scope="col">Họ</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Ngày sinh</th>
                                <th scope="col">Giới tính</th>
                                <th scope="col">Học hàm/ học vị</th>
                                <th scope="col">Khoa</th>
                                <th scope="col">Chuyên môn</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        required
                                        placeholder="mscb"
                                        onChange={(e) =>
                                            setTeacherTemp({
                                                ...TeacherTemp,
                                                mscb: e.target.value,
                                            })
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Họ"
                                        onChange={(e) =>
                                            setTeacherTemp({
                                                ...TeacherTemp,
                                                ho: e.target.value,
                                            })
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Tên"
                                        onChange={(e) =>
                                            setTeacherTemp({
                                                ...TeacherTemp,
                                                ten: e.target.value,
                                            })
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Ngày sinh"
                                        onChange={(e) =>
                                            setTeacherTemp({
                                                ...TeacherTemp,
                                                ngaySinh: e.target.value,
                                            })
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Giới tính"
                                        onChange={(e) =>
                                            setTeacherTemp({
                                                ...TeacherTemp,
                                                gioiTinh: e.target.value,
                                            })
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Hộ Khẩu"
                                        onChange={(e) =>
                                            setTeacherTemp({
                                                ...TeacherTemp,
                                                hocHam: e.target.value,
                                            })
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Khoa"
                                        onChange={(e) =>
                                            setTeacherTemp({
                                                ...TeacherTemp,
                                                maKhoa: e.target.value,
                                            })
                                        }
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Tên lớp chủ nhiệm"
                                        onChange={(e) =>
                                            setTeacherTemp({
                                                ...TeacherTemp,
                                                chuyenMon: e.target.value,
                                            })
                                        }
                                    />
                                </td>
                                <td>
                                    <button type="submit">Thêm</button>
                                </td>
                            </tr>
                            <GiaoViens
                                Teachers={Teachers}
                                search={search}
                                sex={sex}
                                faculty={faculty}
                            />
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
};

export default GiaoVien;
