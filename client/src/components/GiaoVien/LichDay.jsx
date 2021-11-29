import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const LichDay = ({ mssv }) => {
    const [schedule, setschedule] = useState([]);
    const fetchData = () => {};

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Popup
                trigger={
                    <button type="button" className="button">
                        Lịch dạy
                    </button>
                }
                modal
            >
                <div className="schedule">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Mã môn học</th>
                                <th scope="col">Tên môn học</th>
                                <th scope="col">Tín chỉ</th>
                                <th scope="col">Nhóm môn</th>
                                <th scope="col">Tiết</th>
                                <th scope="col">Thứ</th>
                                <th scope="col">Phòng học</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.map((s) => {
                                return (
                                    <tr>
                                        <td>{s.maMonHoc}</td>
                                        <td>{s.ten}</td>
                                        <td>{s.tinChi}</td>
                                        <td>{s.maNhom}</td>
                                        <td>
                                            {s.tietBatDau + "-" + s.tietKetThuc}
                                        </td>
                                        <td>{s.ngayTrongTuan}</td>
                                        <td>{s.tenPhong}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Popup>
        </>
    );
};

export default LichDay;
