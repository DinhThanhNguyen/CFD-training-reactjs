import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="tab-title">
            <NavLink to={`/thong-tin-ca-nhan`} end>Thông tin tài khoản</NavLink>
            <NavLink to={`/thong-tin-ca-nhan/khoa-hoc-cua-toi`}>Khóa học của bạn</NavLink>
            <NavLink to={`/thong-tin-ca-nhan/du-an-da-lam`}>Dự án đã làm</NavLink>
            <NavLink to={`/thong-tin-ca-nhan/lich-su-thanh-toan`}>Lịch sử thanh toán</NavLink>
            <NavLink to={`/thong-tin-ca-nhan/quan-li-coin`}>Quản lý COIN của tôi</NavLink>
        </div>
    )
}
