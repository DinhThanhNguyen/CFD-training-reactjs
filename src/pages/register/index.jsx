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

export default function Register() {
    //state save value form
    let [form, setForm] = useState({
        username: '',
        phone: '',
        email: '',
        facebook: '',
        payment: 'chuyen-khoan',
        note: ''
    })
    //state save error form
    let [error, setError] = useState({})


    let inputChange = (event) => {
        let inputValue = event.target.value
        let name = event.target.getAttribute('name');

        form[name] = inputValue

        setForm({ ...form })
    }

    let validateOnBlur = (event) => {
        if(form[event.target.getAttribute('name')].length === 0) {
            error[event.target.getAttribute('name')] = 'Trường này không được để trống'
        }
        setError({...error})
    }

    let submitForm = () => {
        let error = {}
        if (!form.username) {
            error['username'] = 'Trường này không được để trống'
        } else if (!/^[a-zA-Z\-]+$/.test(form.username)) {
            error['username'] = 'Họ và Tên không đúng định dạng'
        }
        if (!form.phone) {
            error['phone'] = 'Trường này không được để trống'
        } else if (!/((09|03|07|08|05)+([0-9]{8})\b)/g.test((form.phone))) {
            error['phone'] = 'Số điện thoại không đúng định dạng'
        }
        if (!form.email) {
            error['email'] = 'Trường này không được để trống'
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email)) {
            error['email'] = 'Email không đúng định dạng'
        }
        if (!form.facebook) {
            error['facebook'] = 'Trường này không được để trống'
        } else if (!/(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/.test(form.facebook)) {
            error['facebook'] = 'URL Facebook không đúng địng dạng'
        }


        setError(error)
        if (Object.keys(error).length === 0) {
            alert('Đăng ký Khoá học thành công')
        }
    }

    let deleteError = (event) => {
        error[event.target.getAttribute('name')] = ''
    }

    return (
        <>
            <main className="register-course" id="main">
                <section>
                    <div className="container">
                        <div className="wrap container">
                            <div className="main-sub-title">ĐĂNG KÝ</div>
                            <h1 className="main-title">Thực chiến front-end căn bản </h1>
                            <div className="main-info">
                                <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                                <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                                <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                            </div>
                            <div className="form">
                                <label style={style.labelStyle}>
                                    <p>Họ và tên<span>*</span></p>
                                    <input type="text" placeholder="Họ và tên bạn" name="username" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} value={form.username} />
                                </label>
                                <p className="error" style={style.inputError}>{null || error.username}</p>
                                <label style={style.labelStyle}>
                                    <p>Số điện thoại<span>*</span></p>
                                    <input type="text" placeholder="Số điện thoại" name="phone" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} value={form.phone} />
                                </label>
                                <p className="error" style={style.inputError}>{null || error.phone}</p>
                                <label style={style.labelStyle}>
                                    <p>Email<span>*</span></p>
                                    <input type="text" placeholder="Email của bạn" name="email" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} value={form.email} />
                                </label>
                                <p className="error" style={style.inputError}>{null || error.email}</p>
                                <label style={style.labelStyle}>
                                    <p>URL Facebook<span>*</span></p>
                                    <input type="text" placeholder="https://facebook.com" name="facebook" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} value={form.facebook} />
                                </label>
                                <p className="error" style={style.inputError}>{null || error.facebook}</p>
                                <label className="disable">
                                    <p>Sử dụng COIN</p>
                                    <div className="checkcontainer">
                                        Hiện có <strong>300 COIN</strong>
                                        <input type="checkbox" defaultChecked="checked" />
                                        <span className="checkmark" />
                                    </div>
                                </label>
                                <label>
                                    <p>Hình thức thanh toán</p>
                                    <div className="select">
                                        <div className="head">Chuyển khoản</div>
                                        <div className="sub">
                                            <div>Chuyển khoản</div>
                                            <div>Thanh toán tiền mặt</div>
                                        </div>
                                    </div>
                                </label>
                                <label>
                                    <p>Ý kiến cá nhân</p>
                                    <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." name="note" onChange={inputChange} value={form.note} />
                                </label>
                                <div className="btn main rect" onClick={submitForm}>đăng ký</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
