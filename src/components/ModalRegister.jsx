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

function ModalRegister(props, refRegister) {

    let { form, error, inputChange, validateOnBlur, deleteErrorOnInput, submitForm } = useFormValidate({
        name: '',
        username: '',
        password: ''
    }, {
        rules: {
            name: {
                required: true,
            },
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
            name: {
                required: 'Họ và Tên không được để trống'
            },
            username: {
                required: 'Email không được để trống',
                pattern: 'Email không đúng định dạng'
            },
            password: {
                required: 'Mật khẩu không được để trống'
            }
        }
    })

    let context = useContext(ContextModal)
    let auth = useAuth()

    function submit() {
        let error = submitForm()

        if (Object.keys(error).length === 0) {
            console.log(form);
            fetch(`${API}/register`, {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(response => {
                if(response.data) {
                    auth.submitLogin(response.data)
                    context.closeModalRegister()
                    context.openModalLogin()
                }
            })
        }
    }
    return (
        reactDOM.createPortal(
            <div className="popup-form popup-login" ref={refRegister} style={{ display: 'none' }}>
                <div className="wrap">
                    <h2 className="title">Đăng ký</h2>
                    <input style={style.labelStyle} type="text" placeholder="Họ và Tên" name='name' value={form.name} onChange={inputChange}
                        onBlur={validateOnBlur} onInput={deleteErrorOnInput} />
                    <p className="error" style={style.inputError}>{null || error.name}</p>
                    <input style={style.labelStyle} type="text" placeholder="Email / Số điện thoại" name='username' value={form.username} onChange={inputChange}
                        onBlur={validateOnBlur} onInput={deleteErrorOnInput} />
                    <p className="error" style={style.inputError}>{null || error.username}</p>
                    <input style={style.labelStyle} type="password" placeholder="Mật khẩu" name='password' value={form.password} onChange={inputChange}
                        onBlur={validateOnBlur} onInput={deleteErrorOnInput} />
                    <p className="error" style={style.inputError}>{null || error.password}</p>
                    <div className="btn rect main btn-login" onClick={submit}>đăng ký</div>
                    <p className="policy">
                        Bằng việc đăng kí, bạn đã đồng ý <a>Điều khoản bảo mật</a> của CFD
                    </p>
                    <div className="close" onClick={context.closeModalRegister}>
                        <img src="/img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>,
            document.getElementById('modal-root')
        )
    )
}

export default React.forwardRef(ModalRegister)