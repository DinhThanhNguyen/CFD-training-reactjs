import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectDoneItem(props) {
    return (
        <div className="col-md-6 course">
            <div className="wrap">
                <Link to="/du-an" className="cover">
                    <img src={props.thumbnail} alt="" />
                </Link>
                <div className="info">
                    <Link to="/du-an" className="name">
                        {props.nameProject}
                    </Link>
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
