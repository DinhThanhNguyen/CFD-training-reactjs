import React from 'react'

export default function Gallery() {
    return (
        <section className="section-gallery">
            <div className="textbox">
                <h2 className="main-title">Chúng ta là một team</h2>
            </div>
            <div className="list">
                <img data-flickity-lazyload="img/img_team1.png" alt="" />
                <img data-flickity-lazyload="img/img_team2.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <img data-flickity-lazyload="img/img_team4.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <img data-flickity-lazyload="img/img_team4.png" alt="" />
                <img data-flickity-lazyload="img/img_team1.png" alt="" />
                <img data-flickity-lazyload="img/img_team2.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <img data-flickity-lazyload="img/img_team4.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <div className="item carousel-cell">
                    <img data-flickity-lazyload="img/img_team4.png" alt="" />
                </div>
            </div>
            <div className="controls">
                <div className="btn_ctr prev" />
                <span>Trượt qua</span>
                <div className="timeline">
                    <div className="process" />
                </div>
                <div className="btn_ctr next" />
            </div>
        </section>
    )
}
