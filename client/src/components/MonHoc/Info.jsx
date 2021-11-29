import React from 'react';
import '../../styles/subject.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function({subject}){
    let detail = false
    let temp = subject;
    return (
        <tr className = "subject__body"
            onClick = {()=>{
                        let classList = document.querySelector(`.${subject.id}`)
                        console.log(classList);
                        if (!detail) {
                            classList.classList.add('class-list--active');
                            detail = true;
                        }
                        else{
                            classList.classList.remove('class-list--active');
                            detail = false;
                        }
                    }}
        >
            <th className="body__content">{subject.id}</th>
            <th className="body__content">{subject.name}</th>
            <th className="body__content">{subject.tinChi}</th>
            <th className="body__content body__content--long">{subject.khoa}</th>
            <th className="body__content" >
                <EditMonHoc temp = {temp}/>
            </th>
            <th className="body__content body__content--short">
            <Popup trigger={<button className = "button--delete">X</button>} modal>
                <div>
                    <div className = "modal-header">Xóa môn?</div>
                    <div className = "modal-button">
                        <button className = "button--edit"> Hủy</button>
                        <button className = "button--delete"> Xóa</button>
                    </div>
                </div>
            </Popup>             
            </th>
        </tr>
    )
}

function EditMonHoc({temp}){
    return (
        <Popup trigger={<button className = "button--edit" >Chỉnh sửa</button>} modal>
            <div className = "modal-box">
                <div className = "modal-header">
                    Chỉnh sửa thông tin
                </div>
                <div className = "modal-body">
                <form >
                    <p className = "modal-input">
                        <label className = "input-field">Mã môn học</label>
                        <input type = "text" className = "input-body" required defaultValue = {temp.id}></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Tên môn học</label>
                        <input type = "text" className = "input-body" required defaultValue = {temp.name}></input>
                    </p>
                    <p className = "modal-input">
                        <label className = "input-field">Số tín chỉ</label>
                        <input type = "text" className = "input-body" required defaultValue = {temp.tinChi}></input>
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