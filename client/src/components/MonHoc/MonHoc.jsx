import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../../styles/subject.css';
import '../../styles/student.css';
import '../../styles/all.css'

import { useState, useEffect } from 'react';

import Info from './Info';
import Detail from './Detail';

const MonHoc = () => {
    const [subjectList, setSubjectList] = useState( []);
    const [nhomMon, setNhomMon] = useState([]);
    const [giangVien, setGiangVien] = useState([]);
    const [khoa, setKhoa] = useState([]);
    const [hocMon, setHocMon] = useState([])
    const fetchData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("https://localhost:5001/api/monhoc", requestOptions)
            .then((response) => response.json())
            .then((result) => setSubjectList(result))
            .catch((error) => console.log("error", error));
        fetch("https://localhost:5001/api/monhoc/nhommon", requestOptions)
            .then((response) => response.json())
            .then((result) => setNhomMon(result))
            .catch((error) => console.log("error", error));
        fetch("https://localhost:5001/api/sinhvien/khoa", requestOptions)
            .then((response) => response.json())
            .then((result) => setKhoa(result))
            .catch((error) => console.log("error", error));
        fetch("https://localhost:5001/api/monhoc/hocmon", requestOptions)
            .then((response) => response.json())
            .then((result) => setHocMon(result))
            .catch((error) => console.log("error", error));
        fetch("https://localhost:5001/api/giangvien", requestOptions)
            .then((response) => response.json())
            .then((result) => {setGiangVien(result); console.log(result);})
            .catch((error) => console.log("error", error));
    };
    useEffect(()=>{
        fetchData();
    },[])
    // console.log(giangVien);
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
                        <th className="field__content"></th>
                        <th className="field__content">
                            <NewMonHoc subjectList = {subjectList} setSubjectList = {setSubjectList}/>
                        </th>
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

function NewMonHoc({subjectList, setSubjectList}){
    let newSubject = subjectList[0];
    return (
        <Popup trigger={<button className = "button--edit">Thêm môn học</button>} modal>
            <div className = "modal-box">
                <div className = "modal-header">
                    Môn học mới
                </div>
                <div className = "modal-body">
                <form >
                    <p className = "modal-input">
                        <label className = "input-field">Mã môn học</label>
                        <input type = "text" className = "input-body" required ></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Tên môn học</label>
                        <input type = "text" className = "input-body" required ></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Số tín chỉ</label>
                        <input type = "text" className = "input-body" required ></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Khoa</label>
                        <select className = "input-body">
                            <option>Khoa 1</option>
                            <option>Khoa 2</option>
                        </select>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Hệ số điểm BTL</label>
                        <input type = "number" className = "input-body" required></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Hệ số điểm BT</label>
                        <input type = "number" className = "input-body" required></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Hệ số điểm KT</label>
                        <input type = "number" className = "input-body" required></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Hệ số điểm TN</label>
                        <input type = "number" className = "input-body" required></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Hệ số điểm Thi</label>
                        <input type = "number" className = "input-body" required></input>
                    </p>

                    <div className = "modal-button">
                        <button className = "button--delete" type = "button"> Hủy</button>
                        <button className = "button--edit" type = "submit"> Lưu</button>
                    </div>
                </form>
                </div>
            </div>
        </Popup> 
    )
}
