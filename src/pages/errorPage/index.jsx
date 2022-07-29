import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <main className="notfound" id="main">
            <div className="container">
                <section>
                    <h2 className="main-title">404</h2>
                    <p>Không tìm thấy trang</p>
                    <Link to="/" className="btn main round">Trang chủ</Link>
                </section>
            </div>
        </main>
    )
}
