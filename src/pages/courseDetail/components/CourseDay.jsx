import React from 'react'

export default function CourseDay(props) {
    return (
        <div className="accordion">
            <div className="accordion__title" style={{ justifyContent: 'initial' }}>
                {/* <div className="date">{props.learn_date}</div> */}
                <h3 style={{ textAlign: 'left' }}>{props.title}</h3>
            </div>
            <div className="content">
                {props.content}
            </div>
        </div>
    )
}
