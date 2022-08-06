import { useContext, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { ContextModal } from "../App"
import { useAuth } from "./customHook/useAuth"


export default function PrivateRoute() {

    let auth = useAuth()
    let context = useContext(ContextModal)

    useEffect(() => {
        if(!auth.login) {
            context.openModalLogin()
        }
    },[auth.login])
    return (
        auth.login ? <Outlet /> : <div style={{display: 'flex', height: 500, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <p style={{marginBottom: 25}}>Bạn chưa đăng nhập để vào trang này.</p>
            <div onClick={context.openModalLogin} className="btn main round">Đăng nhập</div>
        </div>
    )
}
