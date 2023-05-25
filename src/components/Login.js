import React from 'react'
import { useState } from 'react'
import { auth } from '../config/config'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()
    // console.log(email, password);
    auth.signInWithEmailAndPassword(email,password).then(()=>{
      setSuccessMsg('Login Successfully')
      setEmail('');
          setPassword('');
          setErrorMsg('');
          setTimeout(()=>{
              setSuccessMsg('');
              navigate('/');

          },1000)
    }).catch(error=>setErrorMsg(error.errorMsg));
  }
  return (
    <div className='container'>
      <br></br>
      <br></br>
      <br></br>
      <h1>Login</h1>
      <hr></hr>
      {successMsg && <>
        <div className='success-msg'>{successMsg}</div>
      </>}
      <form className='form-group' autoComplete='off'
        onSubmit={handleLogin}>
        <label>Email</label>
        <input type='email' className='form-control' required
          onChange={(e) => setEmail(e.target.value)} value={email}></input>

        {/* <label>Email</label>
          <input type='email' className='form-control' required></input>
        */}

        <label>Password</label>
        <input type='password' className='form-control' required
          onChange={(e) => setPassword(e.target.value)} value={password}></input>
        <br></br>

        <div className='btn-box'>

        </div>
        <button type="submit" className='btn btn-success btn-md'>LOGIN</button>
      </form>
      {errorMsg &&
        <>
          <div className='error-msg'>
            {errorMsg}
          </div>
        </>}
      <span>Dont't have an Account Create .
        <Link to="/signup">Here</Link>
      </span>

    </div>
  )
}

export default Login
