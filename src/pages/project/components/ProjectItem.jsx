import React from 'react'

export default function ProjectItem(props) {
    return (
        <a href="#" className="item col-md-6">
            <div className="wrap">
                <div className="cover">
                    <img src={props.thumbnail} alt="" />
                </div>
                <div className="info">
                    <div className="name">{props.nameProject}</div>
                    <div className="makeby">{props.doneBy}</div>
                </div>
            </div>
        </a>
    )
}
