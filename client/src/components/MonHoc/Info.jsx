import React from 'react';
import '../../styles/subject.css';

export default function({subject}){
    let detail = false
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
                <button className = "button--edit" >Chỉnh sửa</button>
            </th>
            <th className="body__content body__content--short">
                <button className = "button--delete">X</button>
            </th>
        </tr>
    )
}
