import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {

    let {userLogin} =  useSelector(state=> state.QLNDReducer)

    let renderLogin = () => {

        if(userLogin !== null){
            //đã đăng nhập
            return <div>
                Hello {userLogin.taiKhoan}
            </div>
        }else{
            return <button>Đăng Nhập</button>
        }

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">Home<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-toggle="dropdown" aria-expanded="false">
                            HOOK
                        </NavLink>
                        <div className="dropdown-menu">
                            <NavLink className="dropdown-item" to="/usestate">UseState</NavLink>
                            <NavLink className="dropdown-item" to="/reduxhook">ReduxHook</NavLink>
                            <NavLink className="dropdown-item" to="/useeffect">UseEffect</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-toggle="dropdown" aria-expanded="false">
                            DemoAPI
                        </NavLink>
                        <div className="dropdown-menu">
                            <NavLink className="dropdown-item" to="/axiosrcc">AxiosRcc</NavLink>
                            <NavLink className="dropdown-item" to="/axiosrfc">AxiosRfc</NavLink>
                            <NavLink className="dropdown-item" to="/axiosmiddleware">Middleware</NavLink>
                        </div>
                    </li>
                   
                </ul>
               
            </div>
            {renderLogin()}
        </nav>

    )
}
