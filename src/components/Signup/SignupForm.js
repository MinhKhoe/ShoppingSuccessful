import React,{useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useForm from './useForm';

const SignupForm = () => {

    const [username,setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");

    let navigate = useNavigate();

    const {handleChange, values, handleSubmit} = useForm();

    async function signUp(){
        let item = {username,password,firstname,lastname}
        
        console.warn(item);

        let result = await fetch('http://localhost:3000/register/newUser', {
            method:'POST',
            // body:JSON.stringify(item),
            headers: { 
                //'Content-Type':'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'username': item.username,
                'password': item.password,
                'first_name': item.firstname,
                'last_name': item.lastname,
            })
        })
        result = await result.json();
        console.warn("result",result);
        if(result.result == 'successful'){
            navigate('/login');
        }
    }

  return (
    <div className='form-content-right'>
      <div className='form' >
          <h1>
              Create your account by filling out the information below.
          </h1>
          <div className='form-inputs' 
          onSubmit={handleSubmit}>
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
                    onChange={(e) => 
                        setUserName(e.target.value)}
                    
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
          <div className='form-inputs'>
              <label htmlFor='firstname'
              className='form-label'>
                  FirstName
              </label>
              <input
                    id='firstname'
                    type='firstname'
                    name='firstname'
                    className='form-input'
                    placeholder='Enter your firstname'
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
          </div>
          <div className='form-inputs'>
              <label htmlFor='lastname'
              className='form-label'>
                  LastName
              </label>
              <input
                    id='lastname'
                    type='lastname'
                    name='lastname'
                    className='form-input'
                    placeholder='Enter your lastname'
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    />
          </div>
          <button 
          onClick={signUp}
          className='form-input-btn'
          type='submit'>
              Signup
          </button>
          <span className='form-input-login'>
              Already have an account? Login <a
              href='/login'>Here</a>
          </span>
      </div>
    </div>
  )
}

export default SignupForm
