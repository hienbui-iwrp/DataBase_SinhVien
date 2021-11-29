import React from "react";
import ThoiKhoaBieu from "./ThoiKhoaBieu";

const SinhViens = ({ Students, search, sex, faculty }) => {
    return (
        <>
            {Students.map((student, index) => {
                if (
                    student.mssv.toString().includes(search) ||
                    student.ten.toLowerCase().includes(search)
                )
                    if (sex === "Giới tính" || sex === student.gioiTinh)
                        if (faculty === "Khoa" || faculty === student.khoa)
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
                                    <td>{student.tenLopChuNhiem}</td>
                                    <td>
                                        <ThoiKhoaBieu mssv={student.mssv} />
                                    </td>
                                </tr>
                            );
            })}
        </>
    );
};

export default SinhViens;
