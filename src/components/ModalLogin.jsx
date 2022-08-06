import React, { useContext } from 'react'
import reactDOM from 'react-dom'
import { ContextModal } from '../App'
import { API } from '../contants/api'
import { useAuth } from '../core/customHook/useAuth'
import useFormValidate from '../core/customHook/useFormValidate'

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

function ModalLogin(props, refLogin) {

    let context = useContext(ContextModal)

    let { form, error, inputChange, validateOnBlur, deleteErrorOnInput, submitForm } = useFormValidate({
        username: '',
        password: ''
    }, {
        rules: {
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6
            }
        },
        message: {
            username: {
                required: 'Email không được để trống',
                pattern: 'Email không đúng định dạng'
            },
            password: {
                required: 'Mật khẩu không được để trống'
            }
        }
    })

    let auth = useAuth()

    function submit() {
        let error = submitForm()

        if (Object.keys(error).length === 0) {
            fetch(`${API}/login`, {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(res => {
                    if(res.data) {
                        auth.submitLogin(res.data)
                        context.closeModalLogin()
                    }
                })
        }
    }
    return (
        reactDOM.createPortal(
            <div className="popup-form popup-login" ref={refLogin} style={{ display: 'none' }}>
                <div className="wrap">
                    {/* login-form */}
                    <div className="ct_login" style={{ display: 'block' }}>
                        <h2 className="title">Đăng nhập</h2>
                        <input style={style.labelStyle} type="text" placeholder="Email / Số điện thoại" name='username' value={form.username} onChange={inputChange}
                            onBlur={validateOnBlur} onInput={deleteErrorOnInput} />
                        <p className="error" style={style.inputError}>{null || error.username}</p>
                        <input style={style.labelStyle} type="password" placeholder="Mật khẩu" name='password' value={form.password} onChange={inputChange}
                            onBlur={validateOnBlur} onInput={deleteErrorOnInput} />
                        <p className="error" style={style.inputError}>{null || error.password}</p>
                        <div className="remember">
                            <label className="btn-remember">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <p>Nhớ mật khẩu</p>
                            </label>
                        </div>
                        <div className="btn rect main btn-login" onClick={submit}>Đăng nhập</div>
                        <div className="text-register">
                            <strong>Nếu bạn chưa có tài khoản</strong>
                        </div>
                        <div className="btn rect main btn-login" onClick={context.openModalRegister} >Đăng ký</div>
                        <div className="close" onClick={context.closeModalLogin}>
                            <img src="/img/close-icon.png" alt="" />
                        </div>
                    </div>
                    {/* email form */}
                    {/* <div className="ct_email">
                        <h2 className="title">Đặt lại mật khẩu</h2>
                        <input type="text" placeholder="Email" />
                        <div className="btn rect main btn-next">Tiếp theo</div>
                        <div className="back" />
                        <div className="close">
                            <img src="/img/close-icon.png" alt="" />
                        </div>
                    </div> */}
                </div>
            </div>,
            document.getElementById('modal-root')
        )
    )
}

export default React.forwardRef(ModalLogin)
