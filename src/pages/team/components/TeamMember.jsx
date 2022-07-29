import React from 'react'

export default function TeamMember(props) {
    return (
        <div className="wrap">
            <div className="cover">
                <img src={props.thumbnailMember} alt="" />
            </div>
            <div className="info">
                <div className="name">
                    {props.nameMember}
                </div>
                <p className="title">{props.position}</p>
            </div>
        </div>
    )
}
