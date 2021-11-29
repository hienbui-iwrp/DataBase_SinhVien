import React from 'react';
import '../../styles/subject.css';
import '../../styles/all.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function({subject, nhomMon}){
    return (
        <div className = {`class-list ${subject.maMonHoc}`}>
            <div className = "class-list__new">
                <span> Các lớp hiện có </span>
                <NewNhomMon/>
            </div>
            <div className = "class-list__field">
                <tr className = "subject__field" >
                    <th className ="field__content">Nhóm lớp</th>
                    <th className ="field__content">Kì</th>
                    <th className ="field__content">Sỉ số</th>
                    <th className ="field__content">Giảng viên</th>
                </tr>
                {
                    nhomMon.map((nhom)=>{
                        if(nhom.maMonHoc === subject.maMonHoc)
                            return <Schedule nhom = {nhom} />
                    })
                }
                
            </div>
        </div>
    )
}

function Schedule({nhom}){
    return (
        <div >
            <tr className = "subject__body">
                <th className ="body__content">{nhom.maNhom}</th>
                <th className ="body__content">{nhom.kiHoc}</th>
                <th className ="body__content">{nhom.soLuong}</th>
                <th className ="body__content">{nhom.mscb}</th>
                <th className ="field__content">
                    <button className = "button--delete">Xóa</button>
                </th>
            </tr>
            <div className = "class-list__sched">
                <tr className = "subject__field" >
                    <th className ="field__content">Thứ</th>
                    <th className ="field__content">Tiết bắt đầu</th>
                    <th className ="field__content">Tiết kết thúc</th>
                    <th className ="field__content">Phòng </th>
                    <th className ="field__content">Tuần học</th>

                </tr>
                <tr className = "subject__body" style = {{marginBottom: "20px"}}>
                    <th className ="body__content">{nhom.ngayTrongTuan}</th>
                    <th className ="body__content">{nhom.tietBatDau}</th>
                    <th className ="body__content">{nhom.tietKetThuc}</th>
                    <th className ="body__content">Phòng(Chưa thêm) </th>
                    <th className ="body__content">Tuần học(Chưa thêm)</th>
                </tr>
            </div>
        </div>
    )
}

function NewNhomMon(){
    return (
        <Popup trigger={<button className = "button--edit" >Thêm mới</button>} modal>
            <div className = "modal-box">
                <div className = "modal-header">
                    Thêm lớp mới
                </div>
                <div className = "modal-body">
                <form >
                    <p className = "modal-input">
                        <label className = "input-field">Mã nhóm</label>
                        <input type = "text" className = "input-body" required></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Kì học</label>
                        <input type = "text" className = "input-body" required></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Ngày học</label>
                        <select className = "input-body">
                            <option>Thứ 2</option>
                            <option>Thứ 3</option>
                            <option>Thứ 4</option>
                            <option>Thứ 5</option>
                            <option>Thứ 6</option>
                            <option>Thứ 7</option>
                            <option>Chủ nhật</option>
                        </select>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Tiết bắt đầu</label>
                        <input type = "number" className = "input-body" required></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Tiết kết thúc</label>
                        <input type = "number" className = "input-body" required></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Mã số giảng viên</label>
                        <input type = "text" className = "input-body" required></input>
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
