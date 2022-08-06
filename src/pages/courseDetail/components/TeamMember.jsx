import React from 'react'

export default function TeamMember(props) {
    return (
        <div className="col-md-4">
            <div className="wrap">
                <div className="cover">
                    <img src={props.thumbnailMember} alt="" />
                </div>
                <div className="info">
                    <div className="name" style={{fontSize: 20, fontWeight: 600}}>
                        {props.nameMember}
                    </div>
                    <p className="title">{props.position}</p>
                </div>
            </div>
        </div>
    )
}