import React, { useEffect, useState } from 'react'
import pageApi from '../../contants/pageApi'
import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Gallery from './components/Gallery'
import Review from './components/Review'
import Special from './components/Special'

export default function Home() {
    let [state, setState] = useState()
    let [course, setCourse] = useState()
    let isLoading = false
    useEffect(() => {
        let $ = window.$
        $("html, body").animate({ scrollTop: 0 }, 1000);
        async function getDataHome() {
            let dataCourse = await pageApi.courses()
            setCourse(dataCourse.data)
        }
        getDataHome()
    }, [])
    if (!course) {
        isLoading = true
    }
    return (
        <main className="homepage" id="main">
            <Banner />
            <CourseList offline={course} isLoading={isLoading} />
            <Special />
            <Review />
            <Gallery />
            <section className="section-action">
                <div className="container">
                    <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                </div>
            </section>
        </main>
    )
}
