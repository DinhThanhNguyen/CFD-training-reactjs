import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/Loading'
import { API } from '../../contants/api'
import { useAuth } from '../../core/customHook/useAuth'
import Sidebar from './components/Sidebar'

export default function Profile() {
    let auth = useAuth()
    let [token, setToken] = useState(auth.user)
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
                            .then(res2 => res2.json())
                            .then(res2 => {
                                setToken(res2.data)
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

    

    if(!dataUser) return <Loading />

    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                    <img src="/img/thumb-member.jpg" alt="" />
                        <div className="camera" style={{backgroundImage: `url(/img/camera-cfd.svg)`}} />
                    </div>
                    <div className="name">{dataUser.name}</div>
                </div>
                <div className="container">
                    <div className="tab">
                        <Sidebar />
                        <div className="tab-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
