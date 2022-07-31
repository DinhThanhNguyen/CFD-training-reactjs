import React from 'react'
import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Gallery from './components/Gallery'
import Register from './components/Register'
import Review from './components/Review'
import Special from './components/Special'

export default function Home() {
    return (
        <main className="homepage" id="main">
            <Banner />
            <CourseList />
            <Special />
            <Review />
            <Gallery />
            <Register />
        </main>
    )
}
