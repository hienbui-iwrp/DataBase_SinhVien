import React from "react";

const GiaoViens = ({ Teachers, search, sex, faculty }) => {
    return (
        <>
            {Teachers.map((teacher, index) => {
                if (
                    teacher.mscb.toString().includes(search) ||
                    teacher.ten.toLowerCase().includes(search)
                )
                    if (sex === "Giới tính" || sex === teacher.gioiTinh)
                        if (faculty === "Khoa" || faculty === teacher.khoa)
                            return (
                                <tr key={index}>
                                    <td>{teacher.mscv}</td>
                                    <td>{teacher.ho}</td>
                                    <td>{teacher.ten}</td>
                                    <td>{teacher.ngaySinh}</td>
                                    <td>{teacher.gioiTinh}</td>
                                    <td>{teacher.hocHam}</td>
                                    <td>{teacher.maKhoa}</td>
                                    <td>{teacher.chuyenMon}</td>
                                    <td></td>
                                </tr>
                            );
            })}
        </>
    );
};

export default GiaoViens;
