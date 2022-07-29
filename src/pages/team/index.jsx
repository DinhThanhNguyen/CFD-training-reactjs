import React from 'react'
import TeamMember from './components/TeamMember'

export default function Team() {
    return (
        <main className="team" id="main">
            <section>
                <div className="container">
                    <div className="top">
                        <h2 className="main-title">CFD Team</h2>
                        <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                            elementum sem non luctus
                        </p>
                    </div>
                    <div className="list row">
                        <div className="item col-md-6 col-sm-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Trần Nghĩa" position="Founder &amp; Creative Front-End Developer" />
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Đặng Thuyền Vương" position="Co-Founder &amp; Fullstack Developer" />
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Đặng Thuyền Quân" position="Co-Founder &amp; Backend Developer" />
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Nguyễn Đức Huy" position="Co-Founder &amp; Front-End Developer" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Diệp Anh Thy" position="CFD1-Offline" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Huỳnh Tiến Tài" position="CFD1-Offline" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Ngô thành long" position="CFD1-Offline" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Trần Anh Tuấn" position="CFD1-Offline" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Diệp Anh Thy" position="CFD1-Offline" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Huỳnh Tiến Tài" position="CFD1-Offline" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Ngô thành long" position="CFD1-Offline" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamMember thumbnailMember="/img/thumb-member.jpg" nameMember="Trần Anh Tuấn" position="CFD1-Offline" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
