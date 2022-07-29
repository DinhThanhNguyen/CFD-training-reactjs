import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 left">
                        <p className="des">
                            Sáng tạo, tinh tế và phù hợp sẽ khiến
                            sản phẩm của bạn trở nên khác biệt.
                        </p>
                        <p className="address">
                            Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh
                        </p>
                        <p className="phone">(+84) 98 9596 913</p>
                        <div className="social">
                            <Link className="fb" to="/">
                                {/* <img src="/img/icon-fb.svg" alt=""> */}
                            </Link>
                            <Link className="gmail" to="/">
                                {/* <img src="/img/icon-gmail.svg" alt=""> */}
                            </Link>
                            <Link className="skype" to="/">
                                {/* <img src="/img/icon-skype.svg" alt=""> */}
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Trang chủ</Link>
                                </li>
                                <li>
                                    <Link to="/danh-sach-khoa-hoc">Khóa học</Link>
                                </li>
                                <li>
                                    <Link to="/phuong-thuc-thanh-toan">Thanh toán</Link>
                                </li>
                                <li>
                                    <Link to="/faq">FAQ</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="back-to-top">
                    <div className="line" />
                    CUỘN LÊN
                </div>
            </div>
            <div className="copy-right">
                <div className="container">
                    <p>2020 Creative Front-End Dev</p>
                    <p>Được thiết kế và lập trình bởi CFD Team</p>
                </div>
            </div>
        </footer>
    )
}
