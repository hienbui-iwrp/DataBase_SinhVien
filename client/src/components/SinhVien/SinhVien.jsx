import React from "react";
import "../../styles/student.css";

const SinhVien = () => {
    return (
        <>
            <div className="student">
                <div className="student-header">
                    <input type="text" placeholder="Search mssv, tên" />
                    <select name="Khoa" id="Khoa">
                        <option value="">Khoa</option>
                        <option value="">máy tính</option>
                        <option value="">máy tính</option>
                        <option value="">máy tính</option>
                    </select>
                    <select name="" id="">
                        <option value="">Giới tính</option>
                        <option value="">Nam</option>
                        <option value="">Nữ</option>
                        <option value="">Khác</option>
                    </select>
                </div>
                <div className="student-list">
                    <table class="table table-hover">
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
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <button>Thêm</button>
                                </td>
                            </tr>
                            <tr>
                                <td>19111</td>
                                <td>Nguyen</td>
                                <td>Anh</td>
                                <td>Bỏ học</td>
                                <td>111-11-1</td>
                                <td>Nam</td>
                                <td>Việt Nam</td>
                                <td>Mt</td>
                                <td>
                                    <button>Lịch</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SinhVien;
