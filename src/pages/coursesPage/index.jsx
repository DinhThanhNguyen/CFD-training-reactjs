import React, { useEffect, useState } from 'react'
import Course from '../../components/Course'
import { API } from '../../contants/api'
import SkeletonLoading from '../../components/SkeletonCourse'

export default function CoursePage() {

    let [course, setCourse] = useState()
    let isLoading = false
    useEffect(() => {
        let $ = window.$
        $("html, body").animate({ scrollTop: 0 }, 1000);
        fetch(`${API}/elearning/v4/courses`)
            .then(res => res.json())
            .then(res => {
                setCourse(res.data)
            })
    }, [])

    if (!course) {
        isLoading = true
    }

    return (
        <>
            <main className="homepage" id="main">
                <section className="section-1">
                    <div className="container">
                        <h2 className="main-title">KHÓA HỌC CFD</h2>
                        <div className="textbox">
                            <h2 className="main-title">OFFLINE</h2>
                        </div>
                        <div className="list row">
                            {
                                isLoading ? [...Array(9)].map((e, i) => <SkeletonLoading key={i} />) : course.map(item => <Course key={item.id} {...item} isLoading={isLoading} />)
                            }
                        </div>
                    </div>
                </section>
                <section className="section-2 section-blue">
                    <div className="container">
                        <div className="textbox">
                            <h3 className="sub-title">KHÓA HỌC</h3>
                            <h2 className="main-title">ONLINE</h2>
                        </div>
                        <div className="list row">
                            {
                                isLoading ? [...Array(9)].map((e, i) => <SkeletonLoading key={i} />) : course.map(item => <Course key={item.id} {...item} isLoading={isLoading} />)
                            }
                        </div>
                        <div className="text-deco">C</div>
                    </div>
                </section>
            </main>
        </>
    )
}
