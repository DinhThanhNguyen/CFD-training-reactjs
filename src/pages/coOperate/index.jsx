import React, { useState } from 'react'
import useFormValidate from '../../hook/useFormValidate'

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
    let {form, error, inputChange, validateOnBlur, submitForm, deleteErrorOnInput} = useFormValidate({
        username: '',
        email: '',
        title: '',
        content: ''
    }, {
        rules: {
            username: {
                required: true
            },
            email: {
                required: true,
                pattern: 'email'
            },
            title: {
                required: true
            },
            content: {
                required: true
            }
        },
        message: {
            username: {
                required: 'Họ và Tên không được để trống'
            },
            email: {
                required: 'Email không được để trống',
                pattern: 'Email không đúng định dạng'
            },
            title: {
                required: 'Tiêu đề không được để trống',
            },
            content: {
                required: 'nội dung không được để trống',
            }
        }
    })

    function submit() {
        let error = submitForm()
        if(Object.keys(error).length === 0) {
            alert('Liên hệ hợp tác thành công. Chúng tôi sẽ liên hệ lại sớm')
        }
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
                        <input type="text" placeholder="Họ và tên bạn" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} name='username' value={form.username} />
                    </label>
                    <p className="error" style={style.inputError}>{null || error.username}</p>
                    <label>
                        <p>Số điện thoại</p>
                        <input type="text" placeholder="Số điện thoại" />
                    </label>
                    <label style={style.labelStyle}>
                        <p>Email<span>*</span></p>
                        <input type="text" placeholder="Email của bạn" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} name='email' value={form.email} />
                    </label>
                    <p className="error" style={style.inputError}>{null || error.email}</p>
                    <label>
                        <p>Website</p>
                        <input type="text" placeholder="Đường dẫn website http://" />
                    </label>
                    <label style={style.labelStyle}>
                        <p>Tiêu đề<span>*</span></p>
                        <input type="text" placeholder="Tiêu đề liên hệ" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} name='title' value={form.title} />
                    </label>
                    <p className="error" style={style.inputError}>{null || error.title}</p>
                    <label style={style.labelStyle}>
                        <p>Nội dung<span>*</span></p>
                        <textarea cols={30} rows={10} onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} name='content' value={form.content} />
                    </label>
                    <p className="error" style={style.inputError}>{null || error.content}</p>
                    <div className="btn main rect" onClick={submit}>đăng ký</div>
                </div>
            </section>
        </main>
    )
}
