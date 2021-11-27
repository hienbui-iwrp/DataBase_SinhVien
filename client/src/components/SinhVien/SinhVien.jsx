import React, { useEffect, useState } from "react";
import "../../styles/student.css";

const SinhVien = () => {
    const [StudentTemp, setStudentTemp] = useState({});
    const [sex, setsex] = useState("Giới tính");
    const [search, setsearch] = useState("");
    const [Students, setStudents] = useState([]);
    const [Faculties, setFaculties] = useState([]);
    const [faculty, setfaculty] = useState("Khoa");

    const fetchData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("https://localhost:5001/api/sinhvien", requestOptions)
            .then((response) => response.json())
            .then((result) => setStudents(result))
            .catch((error) => console.log("error", error));

        fetch("https://localhost:5001/api/sinhvien/khoa", requestOptions)
            .then((response) => response.json())
            .then((result) => setFaculties(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="student">
                <div className="student-header">
                    <input
                        type="text"
                        placeholder="Search mssv, tên"
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
                <form className="student-list">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">MSSV</th>
                                <th scope="col">Họ</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Tình Trạng</th>
                                <th scope="col">Ngày sinh</th>
                                <th scope="col">Giới tính</th>
                                <th scope="col">Hộ Khẩu</th>
                                <th scope="col">Khoa</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" required />
                                </td>
                                <td>
                                    <input type="text" required />
                                </td>
                                <td>
                                    <input type="text" required />
                                </td>
                                <td>
                                    <input type="text" required />
                                </td>
                                <td>
                                    <input type="text" required />
                                </td>
                                <td>
                                    <input type="text" required />
                                </td>
                                <td>
                                    <input type="text" required />
                                </td>
                                <td>
                                    <input type="text" required />
                                </td>
                                <td>
                                    <button type="submit">Thêm</button>
                                </td>
                            </tr>
                            {Students.map((student, index) => {
                                if (
                                    student.mssv.toString().includes(search) ||
                                    student.ten.toLowerCase().includes(search)
                                )
                                    if (
                                        sex === "Giới tính" ||
                                        sex === student.gioiTinh
                                    )
                                        if (
                                            faculty === "Khoa" ||
                                            faculty === student.khoa
                                        )
                                            return (
                                                <tr key={index}>
                                                    <td>{student.mssv}</td>
                                                    <td>{student.ho}</td>
                                                    <td>{student.ten}</td>
                                                    <td>{student.tinhTrang}</td>
                                                    <td>{student.ngaySinh}</td>
                                                    <td>{student.gioiTinh}</td>
                                                    <td>{student.hoKhau}</td>
                                                    <td>{student.khoa}</td>
                                                    <td>
                                                        <button type="button">
                                                            Lịch
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
};

export default SinhVien;
