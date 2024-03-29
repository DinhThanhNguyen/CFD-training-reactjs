import React, { useEffect, useState } from 'react'
import Loading from '../../../components/Loading'
import { API } from '../../../contants/api'
import { useAuth } from '../../../core/customHook/useAuth'
import useFormValidate from '../../../core/customHook/useFormValidate'

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

export default function InforAccount() {
    let { form, error, inputChange, validateOnBlur, submitForm, deleteErrorOnInput } = useFormValidate({
        username: '',
        phone: '',
        facebook: '',
        skype: '',
    }, {
        rules: {
            username: {
                required: true
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            facebook: {
                required: true,
                pattern: /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
            },
            skype: {
                required: true,
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
            facebook: {
                required: 'URL Facebook không được để trống',
                pattern: 'URL Facebook không đúng định dạng'
            },
            skype: {
                required: 'Skype không được để trống',
            },
        }
    })
    let auth = useAuth()
    let token = auth.user
    let [dataUser, setdataUser] = useState()
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
                            .then(response => response.json())
                            .then(response => {
                                token = response.data
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

    async function saveForm() {
        let error = submitForm()
        if (Object.keys(error).length === 0) {
            alert('Cập nhật thông tin thành công')
        }
    }

    if (!dataUser) {
        return <Loading />
    }

    return (
        <>
            <div className="tab1" style={{ display: 'block' }}>
                <label style={style.labelStyle}>
                    <p>Họ và tên<span>*</span></p>
                    <input type="text" placeholder={dataUser.name} name="username" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} value={form.username} />
                </label>
                <p className="error" style={style.inputError}>{null || error.username}</p>
                <label style={style.labelStyle}>
                    <p>Số điện thoại<span>*</span></p>
                    <input type="text" placeholder="0949******" name="phone" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} value={form.phone} />
                </label>
                <p className="error" style={style.inputError}>{null || error.phone}</p>
                <label>
                    <p>Email<span>*</span></p>
                    <input defaultValue={dataUser.email} disabled type="text" />
                </label>
                <label style={style.labelStyle}>
                    <p>Facebook<span>*</span></p>
                    <input type="text" placeholder="Facebook url" name="facebook" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} value={form.facebook} />
                </label>
                <p className="error" style={style.inputError}>{null || error.facebook}</p>
                <label style={style.labelStyle}>
                    <p>Skype<span>*</span></p>
                    <input type="text" placeholder="Skype url" name="skype" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteErrorOnInput} value={form.skype} />
                </label>
                <p className="error" style={style.inputError}>{null || error.skype}</p>
                <div className="btn main rect" onClick={saveForm}>LƯU LẠI</div>
            </div>
        </>
    )
}
