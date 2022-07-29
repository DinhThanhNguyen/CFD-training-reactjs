import React from 'react'
import MyCourse from './MyCourse'

export default function MyCourseList() {
    return (
        <div className="tab2" style={{ display: 'block' }}>
            <MyCourse thumbnail="/img/img3.png" nameCourse="Front-End căn bản" date="Khai giảng ngày 09/09/2021" 
                    studyTime="54 giờ" numberVideo="25 video" member="20 học viên" />
            <MyCourse thumbnail="/img/img7.png" nameCourse="Front-end nâng cao" date="Khai giảng ngày 09/09/2021" 
                    studyTime="54 giờ" numberVideo="25 video" member="6 học viên" />
        </div>
    )
}
