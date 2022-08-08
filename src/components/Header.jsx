import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContextModal } from '../App'
import { API } from '../contants/api'
import { useAuth } from '../core/customHook/useAuth'

let $ = window.$
export default function Header() {
    let context = useContext(ContextModal)
    let auth = useAuth()
    let token = auth.user
    let [dataUser, setdataUser] = useState()

    useEffect(() => {
        $('body').on('click', function () {
            $('.select.active .sub').fadeOut(200);
            $('.select sub').fadeOut(200);
        })

        $('.menu-hambeger').on('click', function () {
            $('body').toggleClass('menu-is-show');
        });
        $('.overlay_nav').on('click', function (e) {
            $('body').removeClass('menu-is-show');
        });

        $(document).keyup(function (e) {
            if (e.key === "Escape") {
                $('body').removeClass('menu-is-show');
            }
        });
    }, [])

    useEffect(() => {
        if (token) {
            fetch(`${API}/user/get-info`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.accessToken}`
                }
            })
                .then(res => {
                    if (res.status === 403) {
                        fetch(`${API}/refresh-token`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token.accessToken}`
                            },
                            body: JSON.stringify({
                                refreshToken: token.refreshToken
                            })
                        })
                            .then(res2 => res2.json())
                            .then(res2 => {
                                token = res2.data
                            })
                    } else {
                        res.json()
                        .then(res => {
                            setdataUser(res.data);
                        })
                    }
                })
        }
    }, [token])

    function closeNav() {
        $('.overlay_nav').trigger('click')
    }

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
                    <Link to="/" onClick={closeNav} className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        {
                            auth.login && dataUser ? <div className="have-login">
                                <div className="account">
                                    <Link to="/thong-tin-ca-nhan" onClick={closeNav} className="info">
                                        <div className="name">{dataUser.name}</div>
                                        <div className="avatar">
                                            <img src="/img/thumb-member.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <Link to="/thong-tin-ca-nhan/khoa-hoc-cua-toi" onClick={closeNav}>Khóa học của tôi</Link>
                                    <Link to="/thong-tin-ca-nhan" onClick={closeNav}>Thông tin tài khoản</Link>
                                    <Link to="/" onClick={auth.submitLogout}>Đăng xuất</Link>
                                </div>
                            </div> : <div className="not-login bg-none">
                                <div style={{ cursor: 'pointer' }} className="btn-register" onClick={context.openModalLogin}>Đăng nhập</div>
                                <div style={{ cursor: 'pointer' }} className="btn main btn-open-login" onClick={context.openModalRegister}>Đăng ký</div>
                            </div>
                        }
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
                        <Link to="/" onClick={closeNav}>Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/team" onClick={closeNav}>CFD Team</Link>
                    </li>
                    <li>
                        <Link to="/danh-sach-khoa-hoc" onClick={closeNav}>Khóa Học</Link>
                    </li>
                    <li>
                        <Link to="/du-an" onClick={closeNav}>Dự Án</Link>
                    </li>
                    <li>
                        <Link to="/hop-tac" onClick={closeNav}>Liên hệ</Link>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" />
        </>
    )
}
