import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react'
import useFormValidate from '../../hook/useFormValidate';

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

    let [loading, setLoading] = useState(false);

    let { form, error, inputChange, validateOnBlur, deleteErrorOnInput, submitForm } = useFormValidate({
        username: '',
        phone: '',
        email: '',
        facebook: '',
    }, {
        rules: {
            username: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            email: {
                required: true,
                pattern: 'email'
            },
            facebook: {
                required: true,
                pattern: /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/
            }
        },
        message: {
            username: {
                required: 'Họ và Tên không được để trống'
            },
            phone: {
                required: 'Số điện thoại không được để trống',
                pattern: 'Số điện thoại không đúng định dạng'
            },
            email: {
                required: 'Email không được để trống',
                pattern: 'Email không đúng định dạng'
            },
            facebook: {
                required: 'URL Facebook không được để trống',
                pattern: 'URL Facebook không đúng định dạng'
            }
        }
    })
    function submit() {
        let error = submitForm()
        if (Object.keys(error).length === 0) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                alert('Đăng ký Khoá học thành công')
            }, 1000)
        }
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
                                    <input type="text" placeholder="Họ và tên bạn" name="username" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} value={form.username} />
                                </label>
                                <p className="error" style={style.inputError}>{null || error.username}</p>
                                <label style={style.labelStyle}>
                                    <p>Số điện thoại<span>*</span></p>
                                    <input type="text" placeholder="Số điện thoại" name="phone" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} value={form.phone} />
                                </label>
                                <p className="error" style={style.inputError}>{null || error.phone}</p>
                                <label style={style.labelStyle}>
                                    <p>Email<span>*</span></p>
                                    <input type="text" placeholder="Email của bạn" name="email" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} value={form.email} />
                                </label>
                                <p className="error" style={style.inputError}>{null || error.email}</p>
                                <label style={style.labelStyle}>
                                    <p>URL Facebook<span>*</span></p>
                                    <input type="text" placeholder="https://facebook.com" name="facebook" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} value={form.facebook} />
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
                                <div className="btn main rect" onClick={submit}>đăng ký {loading && <CircularProgress size={20} style={{ marginLeft: 20 }} />}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
