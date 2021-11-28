import React from 'react';
import '../../styles/subject.css';

export default function({subject}){
    return (
        <tr className = "subject__body">
            <th className="body__content">{subject.id}</th>
            <th className="body__content">{subject.name}</th>
            <th className="body__content">{subject.tinChi}</th>
            <th className="body__content body__content--long">{subject.khoa}</th>
            <th className="body__content" >
                <button className = "button--edit">Chỉnh sửa</button>
            </th>
            <th className="body__content body__content--short">
                <button className = "button--delete">X</button>
            </th>
        </tr>
    )
}

