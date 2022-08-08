import React from 'react'

export default function ReviewImage(props) {
    return (
        <div className="carousel-cell">
            <div className="img">
                <picture>
                    <source media="(max-width: 767px)" srcSet={props.source} />
                    <img data-flickity-lazyload={props.image} alt="" />
                </picture>
            </div>
            <div className="ct_m">
                <div className="info">
                    <div className="name">
                        <h4>{props.name}</h4>
                    </div>
                    <div className="quotes"><img src="img/quotes.svg" alt="" /></div>
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="bottom">
                </div>
            </div>
        </div>
    )
}
