import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <div className="banner jarallax">
            <div className="container">
                <div className="content">
                    <h2 className="title">Thực Chiến</h2>
                    <h2 className="title">Tạo ra sản phẩm có giá trị</h2>
                    <Link to="/danh-sach-khoa-hoc" className="btn main round">KHÓA HỌC</Link>
                </div>
            </div>
            <div className="jarallax-img">
                <img src="/img/bg-cover.jpg" alt="" />
                {/* <div className="video-bg lazyload" src="/video/CFD-video-bg2.mp4" /> */}
            </div>
        </div>
    )
}
