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

export default function InforAccount() {
    let [form, setForm] = useState({
        username: '',
        phone: '',
        facebook: '',
        skype: ''
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
        if (!form.phone) {
            error['phone'] = 'Trường này không được để trống'
        } else if (!/((09|03|07|08|05)+([0-9]{8})\b)/g.test((form.phone))) {
            error['phone'] = 'Số điện thoại không đúng định dạng'
        }
        if (!form.facebook) {
            error['facebook'] = 'Trường này không được để trống'
        } else if (!/(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/.test(form.facebook)) {
            error['facebook'] = 'URL Facebook không đúng địng dạng'
        }


        setError(error)
        if (Object.keys(error).length === 0) {
            alert('Thay đổi thông tin thành công')
        }
    }

    let deleteError = (event) => {
        error[event.target.getAttribute('name')] = ''
    }

    return (
        <>
            <div className="tab1" style={{ display: 'block' }}>
                <label style={style.labelStyle}>
                    <p>Họ và tên<span>*</span></p>
                    <input type="text" placeholder="Nguyễn Văn A" name="username" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} value={form.username} />
                </label>
                <p className="error" style={style.inputError}>{null || error.username}</p>
                <label style={style.labelStyle}>
                    <p>Số điện thoại<span>*</span></p>
                    <input type="text" placeholder="0949******" name="phone" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} value={form.phone} />
                </label>
                <p className="error" style={style.inputError}>{null || error.username}</p>
                <label>
                    <p>Email<span>*</span></p>
                    <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
                </label>
                <label style={style.labelStyle}>
                    <p>Facebook<span>*</span></p>
                    <input type="text" placeholder="Facebook url" name="facebook" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} value={form.facebook} />
                </label>
                <p className="error" style={style.inputError}>{null || error.username}</p>
                <label style={style.labelStyle}>
                    <p>Skype<span>*</span></p>
                    <input type="text" placeholder="Skype url" name="skype" onChange={inputChange} onBlur={validateOnBlur} onInput={deleteError} value={form.skype} />
                </label>
                <p className="error" style={style.inputError}>{null || error.username}</p>
                <div className="btn main rect" onClick={submitForm}>LƯU LẠI</div>
            </div>
        </>
    )
}
