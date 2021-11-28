import React from 'react';
import '../../styles/subject.css';
import '../../styles/all.css';

export default function({subject, nhomMon}){
    return (
        <div className = {`class-list ${subject.id}`}>
            <div className = "class-list__new">
                <span> Các lớp hiện có </span>
                <button className = "button--edit">Thêm lớp mới</button>
            </div>
            <div className = "class-list__field">
                <tr className = "subject__field" >
                    <th className ="field__content">Nhóm lớp</th>
                    <th className ="field__content">Sỉ số</th>
                    <th className ="field__content">Giảng viên</th>
                </tr>
                {
                    nhomMon.map((nhom)=>{
                        if(nhom.maMonHoc === subject.id)
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
                <th className ="body__content">{nhom.name}</th>
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
                    <th className ="body__content">{nhom.ngay}</th>
                    <th className ="body__content">{nhom.tietBatDau}</th>
                    <th className ="body__content">{nhom.tietKetThuc}</th>
                    <th className ="body__content">Phòng(Chưa thêm) </th>
                    <th className ="body__content">Tuần học(Chưa thêm)</th>
                </tr>
            </div>
        </div>
    )
}