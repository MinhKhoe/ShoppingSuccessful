import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './Login';
import './Login.css';



const LoginForm = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();



    async function Login() {
        const url = 'http://localhost:3000/login';
        let response = await fetch(url, {
            method: 'POST',
            // mode: "no-cors",
            headers: {
                //'Content-Type':'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            //   body: JSON.stringify({
            //   username: 'tiendat123',
            //   password: '12345678',
            //   first_name: 'Dat',
            //   last_name: 'Nguyen',
            //   })
            body: new URLSearchParams({
                'username': username,
                'password': password,

            })

        });
        //Check Login

        // console.log(response.status);
        try {
            if (response.status == 200) {
                response = await response.json();
                localStorage.setItem("accessToken", URLSearchParams.response)
                // console.log(response.status.json())
                console.log("result", response.result);
                if (response.result == 'successful') {
                    // alert(response);
                    console.log(response)
                    await localStorage.setItem("username", username)
                    // if(localUsername.length > 0) 
                    // navigate('/');
                    window.location.href="/"
                    
                } else {
                    alert("Username, password are wrong.")
                    navigate('/login');
                }
                // console.log(response);
                return response;
            } else {

                alert("Username, password are wrong.")
            }
        } catch {
            alert("Username, password are wrong.")
        }



        // localStorage.setItem("accessToken",URLSearchParams(response))

        console.log(response);
    }


    return (
        <div className='form'>
            <h1>
                Login your account.
            </h1>
            <div className='form-inputs'>
                <label htmlFor='username'
                    className='form-label'>
                    Username
                </label>
                <input
                    id='username'
                    type='email'
                    name='username'
                    className='form-input'
                    placeholder='Enter your username'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className='form-inputs'>
                <label htmlFor='password'
                    className='form-label'>
                    Password
                </label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    className='form-input'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                onClick={Login}
                className='form-input-btn'
                type='submit'>
                Login
            </button>

        </div>
        
    )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }

export default LoginForm
