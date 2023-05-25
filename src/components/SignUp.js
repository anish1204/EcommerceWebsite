import { useState } from 'react'
import React from 'react'
import {auth,fs,storage} from '../config/config'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();

  const [fullName,setFullName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  
  const [errorMsg,setErrorMsg]=useState('');
  const [successMsg,setSuccessMsg]=('');

  const handleSignUp=(e)=>{
    e.preventDefault();
    //console.log(fullName,email,password);
    auth.createUserWithEmailAndPassword(email,password).then((credentials)=>{
        console.log(credentials);
        fs.collection('users').doc(credentials.user.uid).set({
          FullName:fullName,
          Email:email,
          Password:password
        }).then(()=>{
          setSuccessMsg('Signup SuccessFull.You will now be directed to Login')
          setFullName('');
          setEmail('');
          setPassword('');
          setErrorMsg('');
          setTimeout(()=>{
              setSuccessMsg('');
              navigate.push('/login');

          },3000)
        }).catch(error=>setErrorMsg(error.message));
    }).catch((error)=>{
      setErrorMsg(error.message)
    })
  }

  return (
    <div className='container'>
        <br></br>
        <br></br>
        <br></br>
        <h1>Sign-Up</h1>
        <hr></hr>
        {successMsg&&<>
            <div className='success-msg'>{successMsg}</div>
        </>}
        <form className='form-group' autoComplete='off' onSubmit={handleSignUp}>
          <label>Full Name</label>
          <input type='text' className='form-control' required
          onChange={(e)=>setFullName(e.target.value)} value={fullName}></input>
          
          <br></br>
          <label>Email</label>
          <input type='email' className='form-control' required
          onChange={(e)=>setEmail(e.target.value)} value={email}></input>
       

          <label>Password</label>
          <input type='password' className='form-control' required
          onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <br></br>

            <div className='btn-box'>
              
            </div>
            <button type="submit" className='btn btn-success btn-md'>SIGN-UP</button>
        </form>
        {errorMsg && 
        <>
        <div className='error-msg'>
          {errorMsg}
        </div>
        </>}
        <span>Already have an Account Login .
                <Link to="/login">Here</Link>
              </span>
              
    </div>
  )
}

export default SignUp
