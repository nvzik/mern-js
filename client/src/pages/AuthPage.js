import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/auth.context';



 export const AuthPage = () => {

    const auth = useContext(AuthContext)
    const message = useMessage()
     const [form, setForm,] = useState({
         email: '', password: ''
     })

     const {loading, request, error, clearError} = useHttp()

    useEffect ( () => {
        window.M.updateTextFields()
    }, [])

    useEffect(() => {
        console.log('err:',error);
        message(error)
        clearError(error)
     }, [error, message, clearError])
 
     const changeHandler = event => { 
        setForm({...form, [event.target.name] : event.target.value})
     }

     const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (error) { 
            
        }
     }

     const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (error) { 
            
        }
     }

    return (
    

        <div className='row'>
            <div className='col s6 offset-s3'>
                <h1>
                    Shorten The Link
                </h1>

                <div className="card blue-grey darken-3">
                    <div className="card-content white-text">
                        <span className="card-title">Login</span>
                        <div>

                        <div className="input-field">
                            <input 
                                placeholder="Type email" 
                                id="email" 
                                type="text" 
                                name='email'
                                className='yellow-input'
                                value={form.email}
                                onChange={changeHandler}
                                />
                            <label className='input-label' htmlFor="email">Email</label>
                        </div>

                        <div className="input-field">
                            <input 
                                placeholder="Type password" 
                                id="password" 
                                type="password" 
                                name='password'
                                className='yellow-input'
                                value={form.password}
                                onChange={changeHandler}
                                />
                            <label className='input-label' htmlFor="password">Password</label>
                        </div>


                        </div>
                    </div>
                                
                    <div className="card-action">
                        <button 
                        className='btn indigo darken-3' 
                        style={{marginRight:10}}
                        disabled={loading}
                        onClick={loginHandler}
                        >
                            Login
                        </button>

                        <button 
                        className='btn grey lighten-1 black-text'
                        onClick={registerHandler}
                        disabled={loading}
                        >
                            Register 
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
 } 