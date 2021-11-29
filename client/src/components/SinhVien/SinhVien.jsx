import React, { useEffect, useState } from "react";
import "../../styles/student.css";
import SinhViens from "./SinhViens";

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
        console.log("reload");
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
                            <SinhViens
                                Students={Students}
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

export default SinhVien;
