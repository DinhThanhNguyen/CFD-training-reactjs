import React from 'react'

export default function MyCourse(props) {
    return (
        <div className="item">
            <div className="cover">
                <img src={props.thumbnail} alt="" />
            </div>
            <div className="info">
                <a href="#" className="name">
                    {props.nameCourse}
                </a>
                <div className="date">{props.date}</div>
                <div className="row">
                    <div>
                        <img src="/img/clock.svg" alt="" className="icon" />{props.studyTime}
                    </div>
                    <div>
                        <img src="/img/play.svg" alt="" className="icon" />{props.numberVideo}
                    </div>
                    <div>
                        <img src="/img/user.svg" alt="" className="icon" />{props.member}
                    </div>
                </div>
                <div className="process">
                    <div className="line">
                        <div className="rate" style={{ width: '30%' }} />
                    </div>
                    30%
                </div>
                <div className="btn overlay round btn-continue">
                    Tiếp tục học
                </div>
            </div>
        </div>
    )
}
