import React from 'react'

export default function ProjectDoneItem(props) {
    return (
        <div className="col-md-6 course">
            <div className="wrap">
                <a href="#" className="cover">
                    <img src={props.thumbnail} alt="" />
                </a>
                <div className="info">
                    <a href="#" className="name">
                        {props.nameProject}
                    </a>
                    <p className="des">
                        {props.description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={props.avatarUser} alt="" />
                        </div>
                        <div className="name">{props.username}</div>
                    </div>
                    <div className="register-btn">Website</div>
                </div>
            </div>
        </div>
    )
}
