import React from 'react';
import '../../styles/subject.css';
import '../../styles/all.css';

export default function(){
    return (
        <div className = "class-list">
            <div className = "class-list__field">
                <tr className = "subject__field" >
                    <th className ="field__content">Nhóm lớp</th>
                    <th className ="field__content">Sỉ số</th>
                    <th className ="field__content">Giảng viên</th>
                    <th className ="field__content">
                    <button className = "button--delete">Xóa</button>
                    </th>
                </tr>
                <tr className = "subject__body">
                    <th className ="body__content">Nhóm lớp</th>
                    <th className ="body__content">Sỉ số</th>
                    <th className ="body__content">Giảng viên</th>
                </tr>

            </div>
        </div>
    )
}