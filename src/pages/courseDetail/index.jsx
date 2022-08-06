import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import { API } from '../../contants/api'
import Banner from './components/Banner'
import CourseDay from './components/CourseDay'
import TeamMember from './components/TeamMember'

export default function CourseDetail() {

    let param = useParams().slug
    let [dataCourse, setDataCourse] = useState()
    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch(`${API}/elearning/v4/courses`)
            res = await res.json()
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].slug === param) {
                    setDataCourse(res.data[i])
                }
            }
        }
        fetchData()
    }, [param])

    useEffect(() => {
        if(dataCourse) {
            let $ = window.$
            $('.accordion .accordion__title').on('click', function () {
                // console.log($(this));
    
                $(this).next().stop().slideToggle(200);
    
                let $accordion = $(this).closest('.accordion');
                if ($accordion.hasClass('active')) {
                    $accordion.removeClass('active')
                } else {
                    $accordion.addClass('active')
                }
                $(this).closest('.accordion').siblings('.active').removeClass('active').find('.content').stop().slideUp(200);
            })
        }
    }, [dataCourse])
    
    if (!dataCourse) return <Loading />
    
    return (
        <main className="course-detail" id="main">
            <Banner detail={dataCourse} />
            <section className="section-2">
                <div className="container">
                    <p className="des">{dataCourse.long_description}</p>
                    <h2 className="title">giới thiệu về khóa học</h2>
                    <div className="cover">
                        <img src="/img/course-detail-img.png" alt="" />
                    </div>
                    <h3 className="title">nội dung khóa học</h3>
                    {
                        dataCourse.content.map((item, index) => <CourseDay key={index} {...item} />)
                    }
                    <h3 className="title">yêu cầu cần có</h3>
                    <div className="row row-check">
                        {
                            dataCourse.required.map((required, index) => <div key={index} className="col-md-6">{required.content}</div>)
                        }
                    </div>
                    <h3 className="title">hình thức học</h3>
                    <div className="row row-check">
                        {
                            dataCourse.benefits.map((benefit, index) => <div key={index} className="col-md-6">{benefit.content}</div>)
                        }
                    </div>
                    <h3 className="title">
                        <div className="date-start">lịch học</div>
                        <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                    </h3>
                    <p>
                        <strong>Ngày bắt đầu: </strong> {dataCourse.opening_time} <br />
                        <strong>Thời gian học: </strong> {dataCourse.schedule} <br />
                        <strong>Địa điểm học: </strong> {dataCourse.dia_diem_hoc}
                    </p>
                    <h3 className="title">Người dạy</h3>
                    <div className="teaches">
                        <div className="teacher">
                            <div className="avatar">
                                <img src={dataCourse.teacher.avatar} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">{dataCourse.teacher.title}</div>
                                <div className="title">{dataCourse.teacher.position}</div>
                                <p className="intro">
                                    {dataCourse.teacher.description}
                                </p>
                                {
                                    dataCourse.teacher.website ? <p><strong>Website:</strong> <a href={dataCourse.teacher.website}>{dataCourse.teacher.website}</a></p>
                                        : <div> </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="user">
                            <img src="/img/user-group-icon.png" alt="" /> {dataCourse.number_student_default} bạn đã đăng ký
                        </div>
                        <Link to={`/dang-ky-khoa-hoc/${param}`} className="btn main btn-register round">đăng ký</Link>
                        <div className="btn-share btn overlay round btn-icon">
                            <img src="/img/facebook.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {
                dataCourse.mentor.length === 0 ? <div></div> :
                    <section className="section-3">
                        <div className="container">
                            <div className="textbox">
                                <h2 className="main-title">trợ giảng</h2>
                            </div>
                            <div className="list row">
                                {
                                    dataCourse.mentor.map((item, index) => <TeamMember key={index} thumbnailMember={item.avatar} nameMember={item.title} position={item.position} />)
                                }
                            </div>
                        </div>
                    </section>
            }
        </main >
    )
}
