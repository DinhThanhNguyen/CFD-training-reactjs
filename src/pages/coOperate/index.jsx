import React, { useState } from 'react'

const style = ({
    inputError: {
        height: 25,
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 15
    },
    labelStyle: {
        marginBottom: 0,

    }
})

export default function CoOperate() {
    let [form, setForm] = useState({
        username: '',
        email: '',
        title: '',
        content: ''
    })
    let [error, setError] = useState({})

    let inputChange = (event) => {
        let inputValue = event.target.value
        let name = event.target.getAttribute('name');

        form[name] = inputValue

        setForm({ ...form })
    }
    let validateOnBlur = (event) => {
        if (form[event.target.getAttribute('name')].length === 0) {
            error[event.target.getAttribute('name')] = 'Trường này không được để trống'
        }
        setError({ ...error })
    }

    let submitForm = () => {
        let error = {}
        if (!form.username) {
            error['username'] = 'Trường này không được để trống'
        } else if (!/^[a-zA-Z\-]+$/.test(form.username)) {
            error['username'] = 'Họ và Tên không đúng định dạng'
        }
        if (!form.email) {
            error['email'] = 'Trường này không được để trống'
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email)) {
            error['email'] = 'Email không đúng định dạng'
        }
        if (!form.title) {
            error['title'] = 'Trường này không được để trống'
        } else if (!/^[a-zA-Z\-]+$/.test(form.title)) {
            error['title'] = 'Tiêu đề không đúng định dạng'
        }
        if (!form.content) {
            error['content'] = 'Trường này không được để trống'
        } else if (!/^[a-zA-Z\-]+$/.test(form.content)) {
            error['content'] = 'Nội dung không đúng định dạng'
        }

        setError(error)
        if (Object.keys(error).length === 0) {
            alert('Liên hệ hợp tác thành công')
        }
    }

    let deleteError = (event) => {
        error[event.target.getAttribute('name')] = ''
    }

    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                    việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
                <div className="form">
                    <label style={style.labelStyle}>
                        <p>Họ và tên<span>*</span></p>
                        <input type="text" placeholder="Họ và tên bạn" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} name='username' value={form.username} />
                    </label>
                    <p className="error" style={style.inputError}>{null || error.username}</p>
                    <label>
                        <p>Số điện thoại</p>
                        <input type="text" placeholder="Số điện thoại" />
                    </label>
                    <label style={style.labelStyle}>
                        <p>Email<span>*</span></p>
                        <input type="text" placeholder="Email của bạn" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} name='email' value={form.email} />
                    </label>
                    <p className="error" style={style.inputError}>{null || error.email}</p>
                    <label>
                        <p>Website</p>
                        <input type="text" placeholder="Đường dẫn website http://" />
                    </label>
                    <label style={style.labelStyle}>
                        <p>Tiêu đề<span>*</span></p>
                        <input type="text" placeholder="Tiêu đề liên hệ" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} name='title' value={form.title} />
                    </label>
                    <p className="error" style={style.inputError}>{null || error.title}</p>
                    <label style={style.labelStyle}>
                        <p>Nội dung<span>*</span></p>
                        <textarea cols={30} rows={10} onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} name='content' value={form.content} />
                    </label>
                    <p className="error" style={style.inputError}>{null || error.content}</p>
                    <div className="btn main rect" onClick={submitForm}>đăng ký</div>
                </div>
            </section>
        </main>
    )
}
