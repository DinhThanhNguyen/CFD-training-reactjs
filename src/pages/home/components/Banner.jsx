import React from 'react'

export default function Banner() {
    return (
        <div className="banner jarallax">
            <div className="container">
                <div className="content">
                    <h2 className="title">Thực Chiến</h2>
                    <h2 className="title">Tạo ra sản phẩm có giá trị</h2>
                    <div className="btn main round">KHÓA HỌC</div>
                </div>
            </div>
            <div className="jarallax-img">
                <img data-src="/img/bg-cover.jpg" alt="" className="lazyload" />
                <div className="video-bg lazyload" data-src="/video/CFD-video-bg2.mp4" />
            </div>
        </div>
    )
}
