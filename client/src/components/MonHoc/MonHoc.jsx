import React from 'react';
import '../../styles/subject.css';
import '../../styles/student.css';
import '../../styles/all.css'

import { useState } from 'react';

import Info from './Info';
import Detail from './Detail';

const MonHoc = () => {
    const [subjectList, setSubjectList] = useState(
        [
            {
                id: "CO2017",
                name: "Hệ điều hành",
                tinChi: 3,
                khoa: "Khoa học và kĩ thuật máy tính"
            },
            {
                id: "CO2013",
                name: "Hệ cơ sở dữ liệu",
                tinChi: 4,
                khoa: "Khoa học và kĩ thuật máy tính"
            },
            {
                id: "ME1015",
                name: "Nguyên lý máy",
                tinChi: 4,
                khoa: "Cơ khí"
            },
            {
                id: "EE2005",
                name: "Tín hiệu và hệ thống",
                tinChi: 3,
                khoa: "Điện - điện tử"
            },
        ]
    )
    const [nhomMon, setNhomMon] = useState([
        {
            name: 'L01',
            kiHoc: '191',
            ngay: 2,
            tietBatDau: 2,
            tietKetThuc: 4,
            mscb: '008395',
            maMonHoc: 'CO2017', 
            soLuong: 0
        },
        {
            name: 'L02',
            kiHoc: '191',
            ngay: 3,
            tietBatDau: 7,
            tietKetThuc: 9,
            mscb: '002883',
            maMonHoc: 'CO2017', 
            soLuong: 0
        },
        {
            name: 'L01',
            kiHoc: '192',
            ngay: 2,
            tietBatDau: 2,
            tietKetThuc: 4,
            mscb: '008231',
            maMonHoc: 'CO2013', 
            soLuong: 0
        },
        {
            name: 'L01',
            kiHoc: '201',
            ngay: 5,
            tietBatDau: 2,
            tietKetThuc: 4,
            mscb: '002603',
            maMonHoc: 'ME1015', 
            soLuong: 0
        },
        {
            name: 'L01',
            kiHoc: '192',
            ngay: 4,
            tietBatDau: 5,
            tietKetThuc: 6,
            mscb: '002765',
            maMonHoc: 'EE2005', 
            soLuong: 0
        }
    ])
    return (
        <div className="student">
            <div className="student-header">
                <input
                    type="text"
                    placeholder="Tìm bằng tên, mã môn học"
                />
                <select name="Khoa" id="Khoa">
                    <option value="Khoa">Khoa1</option>
                    <option value="Khoa">Khoa2</option>
                    <option value="Khoa">Khoa3</option>
                    <option value="Khoa">Khoa4</option>
                </select>

            </div>
            <div className="student-list">
                <div className = 'subject-container'>
                    <tr className = "subject__field">
                        <th className="field__content">Mã môn học</th>
                        <th className="field__content">Tên môn học</th>
                        <th className="field__content">Số tín chỉ</th>
                        <th className="field__content body__content--long">Khoa</th>
                    </tr>
                    <div className = "subject-list">
                        {
                            subjectList.map(subject=>{
                                return (
                                    <div>
                                        <Info subject = {subject}/>
                                        <Detail subject = {subject} nhomMon={nhomMon}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default MonHoc
