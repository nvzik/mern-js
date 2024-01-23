import React, {useContext, useEffect,useState} from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/auth.context';
import { useNavigate } from "react-router-dom";

 export const CreatePage = () => {
    const history = useNavigate()
    const auth = useContext(AuthContext)
    const[link, setLink] = useState('')
    const {request} = useHttp()
    useEffect ( () => {
        window.M.updateTextFields()
    }, [])


    const pressHandler = async (event) => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from:link}, {Authorization:`Bearer ${auth.token}`})
                history(`/detail/${data.link._id}`)
                console.log(data.link._id);
            } catch (e) {
                
            }
        }
    }

    return (
        <div className='row'>
            <div className='col s8 offset-s2' style={{paddingTop:'2rem'}}>

            <div className="input-field">
                            <input 
                                placeholder="Enter your link" 
                                id="link" 
                                type="text" 
                                value={link}
                                onChange={ e => setLink(e.target.value)}
                                onKeyDown={pressHandler}
                                />
                            <label className='input-label' htmlFor="link">Enter the Link</label>
                        </div>
               

            </div>
        </div>
    )
 } 