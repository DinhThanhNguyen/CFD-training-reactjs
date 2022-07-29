import React from 'react'
import ProjectDoneItem from './ProjectDoneItem'

export default function ProjectDone() {
    return (
        <div className="tab3" style={{ display: 'block' }}>
            <div className="row">
                <ProjectDoneItem thumbnail="/img/img8.png" nameProject="Furnitown" description="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    avatarUser="/img/avt.png" username="Trần Nghĩa" />
                <ProjectDoneItem thumbnail="/img/img8.png" nameProject="GboxMB" description="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    avatarUser="/img/avt.png" username="Trần Nghĩa" />
            </div>
            <div className="btn-wrap">
                <div className="btn overlay btn-icon round">
                    <img src="/img/icon-upload.svg" alt="" /> Tải lên
                </div>
            </div>
        </div>
    )
}
