import React from 'react'
import { Link } from 'react-router-dom'

export default function Review() {
    return (
        <section className="section-testimonial">
            <div className="container">
                <div className="textbox">
                    <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
                </div>
                <div className="testimonial">
                    <div className="testimonial-item">
                        <div className="item">
                            <div className="text">
                                <div className="ct ct-1 active">
                                    <div className="info">
                                        <div className="name">
                                            <h4>Tiến Tài</h4>
                                            <p>Thành viên CFD1</p>
                                        </div>
                                        <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                                    </div>
                                    <div className="content">
                                        Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình front-end qua
                                        khóa học. Like cho 4 mentor.
                                    </div>
                                    <div className="bottom">
                                        <Link to="/"><img src="/img/facebook.svg" alt="" /></Link>
                                        <span>09/10/2020</span>
                                    </div>
                                </div>
                                <div className="ct ct-2">
                                    <div className="info">
                                        <div className="name">
                                            <h4>Phạm Thành Trung</h4>
                                            <p>Thành viên CFD1</p>
                                        </div>
                                        <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                                    </div>
                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero
                                        id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor
                                        in, molestie lectus. Aenean porttitor purus at purus euismod tristique
                                    </div>
                                    <div className="bottom">
                                        <Link to="/"><img src="/img/facebook.svg" alt="" /></Link>
                                        <span>01/10/2020</span>
                                    </div>
                                </div>
                                <div className="ct ct-3">
                                    <div className="info">
                                        <div className="name">
                                            <h4>Nguyễn Văn Tuấn</h4>
                                            <p>Thành viên CFD1</p>
                                        </div>
                                        <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                                    </div>
                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero
                                        id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor
                                        in, molestie lectus. Aenean porttitor purus at purus euismod tristique
                                    </div>
                                    <div className="bottom">
                                        <Link to="/"><img src="/img/facebook.svg" alt="" /></Link>
                                        <span>01/10/2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="images">
                                <div className="list">
                                    <div className="carousel-cell">
                                        <div className="img">
                                            <picture>
                                                <source media="(max-width: 767px)" srcSet="img/Intersect.png" />
                                                <img data-flickity-lazyload="img/tes.jpg" alt="" />
                                            </picture>
                                        </div>
                                        <div className="ct_m">
                                            <div className="info">
                                                <div className="name">
                                                    <h4>Tiến Tài</h4>
                                                    <p>Thành viên CFD1</p>
                                                </div>
                                                <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                                            </div>
                                            <div className="content">
                                                Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình
                                                front-end qua
                                                khóa học. Like cho 4 mentor.
                                            </div>
                                            <div className="bottom">
                                                <Link to="/"><img src="/img/facebook.svg" alt="" /></Link>
                                                <span>09/10/2020</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-cell">
                                        <div className="img">
                                            <picture>
                                                <source media="(max-width: 767px)" srcSet="img/Intersect.png" />
                                                <img data-flickity-lazyload="img/tes.jpg" alt="" />
                                            </picture>
                                        </div>
                                        <div className="ct_m">
                                            <div className="info">
                                                <div className="name">
                                                    <h4>Nguyễn Văn Tuấn</h4>
                                                    <p>Thành viên CFD1</p>
                                                </div>
                                                <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                                            </div>
                                            <div className="content">
                                                Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình
                                                front-end qua
                                                khóa học. Like cho 4 mentor.
                                            </div>
                                            <div className="bottom">
                                                <Link to="/"><img src="/img/facebook.svg" alt="" /></Link>
                                                <span>09/10/2020</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-cell">
                                        <div className="img">
                                            <picture>
                                                <source media="(max-width: 767px)" srcSet="img/Intersect.png" />
                                                <img data-flickity-lazyload="img/tes.jpg" alt="" />
                                            </picture>
                                        </div>
                                        <div className="ct_m">
                                            <div className="info">
                                                <div className="name">
                                                    <h4>Phạm Thành Trung</h4>
                                                    <p>Thành viên CFD1</p>
                                                </div>
                                                <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                                            </div>
                                            <div className="content">
                                                Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình
                                                front-end qua
                                                khóa học. Like cho 4 mentor.
                                            </div>
                                            <div className="bottom">
                                                <Link to="/"><img src="/img/facebook.svg" alt="" /></Link>
                                                <span>09/10/2020</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dots" />
                        <div className="btn_ctr prev" />
                        <div className="btn_ctr next" />
                    </div>
                </div>
            </div>
        </section>
    )
}
