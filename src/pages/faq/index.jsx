import React from 'react'
import Accordion from './component/Accordion'

export default function FAQ() {
    return (
        <main className="faqpage" id="main">
            <div className="container">
                <section>
                    <h2 className="main-title">Câu hỏi thường gặp</h2>
                    <div className="row">
                        <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                            <h3 className="accordion__title-main">Thông tin chung</h3>
                            <Accordion question="CFD là gì?" answer="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                        offers some tangible benefits over alternatives like VueJS for simple page interactions." />
                            <Accordion question="Thành viên sáng lập CFD gồm những ai?" answer="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                        offers some tangible benefits over alternatives like VueJS for simple page interactions." />
                            <Accordion question="Đăng ký khóa học như thế nào?" answer="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                        offers some tangible benefits over alternatives like VueJS for simple page interactions." />
                        </div>
                        <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                            <h3 className="accordion__title-main">Đăng ký, thanh toán và điểm thưởng</h3>
                            <Accordion question="CFD là gì?" answer="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                        offers some tangible benefits over alternatives like VueJS for simple page interactions." />
                            <Accordion question="Thành viên sáng lập CFD gồm những ai?" answer="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                        offers some tangible benefits over alternatives like VueJS for simple page interactions." />
                            <Accordion question="Đăng ký khóa học như thế nào?" answer="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                                        offers some tangible benefits over alternatives like VueJS for simple page interactions." />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
