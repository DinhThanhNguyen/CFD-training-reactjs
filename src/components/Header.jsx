import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger">
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        <div className="have-login">
                            <div className="account">
                                <Link to="/thong-tin-ca-nhan" className="info">
                                    <div className="name">Trần Lê Trọng Nghĩa</div>
                                    <div className="avatar">
                                        <img src="/img/avt.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <Link to="/thong-tin-ca-nhan/khoa-hoc-cua-toi">Khóa học của tôi</Link>
                                <Link to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                                <Link to="/">Đăng xuất</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <Link to="/">Đăng nhập</Link>
                        <Link to="/">Đăng ký</Link>
                    </li>
                    <li className="active">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/team">CFD Team</Link>
                    </li>
                    <li>
                        <Link to="/danh-sach-khoa-hoc">Khóa Học</Link>
                    </li>
                    <li>
                        <Link to="/du-an">Dự Án</Link>
                    </li>
                    <li>
                        <Link to="/hop-tac">Liên hệ</Link>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" />
        </>
    )
}
