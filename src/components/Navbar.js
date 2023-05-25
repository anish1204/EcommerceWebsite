import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image1 from '../images/logo.png'
import { auth } from '../config/config'
import {Icon} from 'react-icons-kit'
import { Navigate } from 'react-router-dom'
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
export const Navbar = ({user}) => {

  const navigate = useNavigate();
  const handleLogout=()=>{
    
    auth.signOut().then(()=>{
      navigate('/login')
    })
    // auth.signOut.then()
  }

  return (
    <div className='navbar'>
        <div className='leftside'>
            <div className='logo'>
                <img src={image1} alt="logo"/>
            </div>
        </div>
        <div className='rightside'>

            {!user&&<>
                <div><Link className='navlink' to="signup">SIGN UP</Link></div>
                <div><Link className='navlink' to="login">LOGIN</Link></div>
            </>} 

            {user&&<>
                <div><Link className='navlink' to="/">{user}</Link></div>
                <div className='cart-menu-btn'>
                    <Link className='navlink' to="/cart">
                        <Icon icon={shoppingCart} size={20}/>
                    </Link>
                    {/* <span className='cart-indicator'>{totalQty}</span> */}
                </div>
                <div className='btn btn-danger btn-md'
                onClick={handleLogout}>LOGOUT</div>
            </>}                     
                            
        </div>
    </div>

)
}

export default Navbar
