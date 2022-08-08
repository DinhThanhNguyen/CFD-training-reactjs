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
                <img data-flickity-lazyload="/img/gallery/cfd-team.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-1.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-2.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-3.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-4.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-5.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-6.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-7.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-8.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-9.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-10.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-11.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-12.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-13.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-14.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-15.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-16.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-17.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-18.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/cfd-team-19.jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/Image-from-iOS-(12).jpg" alt="" />
                <img data-flickity-lazyload="/img/gallery/team-cfd-12.jpg" alt="" />
                <div className="item carousel-cell">
                    <img data-flickity-lazyload="/img/gallery/team-cfd-12.jpg" alt="" />
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
