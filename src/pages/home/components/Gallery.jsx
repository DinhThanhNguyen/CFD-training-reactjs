import React, { useEffect } from 'react'

export default function Gallery() {
    useEffect(() => {
        function teamSlider() {
            let $ = window.$
            let $carouselGallery = $(".homepage .section-gallery .list"),
                $progressBar = $('.homepage .section-gallery .timeline .process');

            $carouselGallery.flickity({
                contain: true,
                wrapAround: false,
                freeScroll: true,
                cellAlign: 'left',
                lazyLoad: 4,
                imagesLoaded: true,
                prevNextButtons: false
            });

            $carouselGallery.on('scroll.flickity', function (event, progress) {
                progress = Math.max(0.05, Math.min(1, progress));
                $progressBar.width(progress * 100 + '%');
            });
        }
        teamSlider();
    }, [])
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
                <span>Trượt qua</span>
                <div className="timeline">
                    <div className="process" />
                </div>
            </div>
        </section>
    )
}
