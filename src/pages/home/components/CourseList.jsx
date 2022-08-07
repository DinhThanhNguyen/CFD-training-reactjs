import React from 'react'
import Course from '../../../components/Course'
import SkeletonLoading from '../../../components/SkeletonCourse';

export default function CourseList({ offline = [], isLoading }) {
    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has a more-or-less normal
                    </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        {
                            isLoading ? [...Array(9)].map((e, i) => <SkeletonLoading key={i} />) : offline.map(course => <Course key={course.id} {...course} />)
                        }
                    </div>
                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        {
                            isLoading ? [...Array(9)].map((e, i) => <SkeletonLoading key={i} />) : offline.map(course => <Course key={course.id} {...course} />)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
