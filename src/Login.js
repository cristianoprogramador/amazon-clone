import React, { useState } from 'react'
import './Login.css'
import amazonlogologin from './img/Amazon_logo2.png'
import { Link, useNavigate } from "react-router-dom"
import { auth } from './firebase';
import userEvent from '@testing-library/user-event';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // some fancy firebase login kkkkkk
    }

    const register = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history('/')
        })
        .catch(error => alert(error.message))

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history("/");
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/' >
        <img className='login__logo' src={amazonlogologin}/>
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text " value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password " value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>

            <p>
            Ao assinar este Acordo Você concorda em receber quaisquer comunicações ou publicidade proveniente do site Amazon-Clone em relação aos seus serviços e produtos.
            </p>

            <button onClick={register}
             className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login