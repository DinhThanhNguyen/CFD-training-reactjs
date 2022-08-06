import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import pageApi from '../../contants/pageApi'
import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Gallery from './components/Gallery'
import Review from './components/Review'
import Special from './components/Special'

export default function Home() {
    let [state, setState] = useState()
    let [course, setCourse] = useState()
    useEffect(() => {
        async function getDataHome() {
            let dataHome = await pageApi.home()
            setState(dataHome)

            let dataCourse = await pageApi.courses()
            setCourse(dataCourse.data)
        }
        getDataHome()
    }, [])
    if (!state || !course) {
        return <Loading />
    }
    return (
        <main className="homepage" id="main">
            <Banner />
            <CourseList offline={course} />
            <Special />
            <Review review={state.review} />
            <Gallery />
            <section className="section-action">
                <div className="container">
                    <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                </div>
            </section>
        </main>
    )
}
