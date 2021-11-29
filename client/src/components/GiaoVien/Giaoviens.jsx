import React from "react";
import LichDay from "./LichDay";

const GiaoViens = ({ Teachers, search, sex, faculty }) => {
    return (
        <>
            {Teachers.map((teacher, index) => {
                if (
                    teacher.mscb.toString().includes(search) ||
                    teacher.ten.toLowerCase().includes(search)
                )
                    if (sex === "Giới tính" || sex === teacher.gioiTinh)
                        if (faculty === "Khoa" || faculty === teacher.maKhoa)
                            return (
                                <tr key={index}>
                                    <td>{teacher.mscb}</td>
                                    <td>{teacher.ho}</td>
                                    <td>{teacher.ten}</td>
                                    <td>{teacher.ngaySinh}</td>
                                    <td>{teacher.gioiTinh}</td>
                                    <td>{teacher.hocHam}</td>
                                    <td>{teacher.maKhoa}</td>
                                    <td>{teacher.chuyenMon}</td>
                                    <td>
                                        <LichDay mscb={teacher.mscb} />
                                    </td>
                                </tr>
                            );
            })}
        </>
    );
};

export default GiaoViens;
