import React from 'react'

export default function CourseDay(props) {
    return (
        <div className="accordion">
            <div className="accordion__title">
                <div className="date">{props.date}</div>
                <h3>{props.title}</h3>
            </div>
            <div className="content">
                {props.content}
            </div>
        </div>
    )
}
