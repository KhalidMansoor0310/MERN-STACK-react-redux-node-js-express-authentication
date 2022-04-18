import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Register() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const {loading,registerErrors,token} = useSelector(state => state.auth);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            dispatch({type:"SET_LOADER"})
            const {data} =await axios.post('http://localhost:5000/api/user/register',{
                name,
                email,
                password
            },config);
            console.log(data)
            dispatch({type:'CLOSE_LOADER'});
            dispatch({type:'REGISTER_ERRORS',payload:data.msg});
            localStorage.setItem('token',data.token);
            dispatch({type:'SET_TOKEN',payload:data.token});
        } catch (error) {
            dispatch({type:'CLOSE_LOADER'});
            dispatch({type:'REGISTER_ERRORS',payload:error.msg});
        }
    }
    useEffect(()=>{
        if(token){
            history.push('/');
        }
    },[history,token])


  return (
    <div className="container my-3">
        <div className="row">
            <div className="col-md-6 m-auto">
                <h1 className='text-center'>REGISTER</h1>
                {loading ? <h3 className='text-center'>Loading...</h3> : null}
                {registerErrors.length > 0 ? <h3 className='text-center'>{registerErrors}</h3> : null}
                <form action="" onSubmit={handleSubmit} className='shadow p-5'>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        className="form-control" 
                        id="email" 
                        onChange={(e)=>setEmail(e.target.value)}
                        
                        />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        className="form-control" 
                        id="password" 
                        onChange={(e)=>setPassword(e.target.value)}
                        
                        />
                    </div>
                    <button className="btn btn-primary btn-block">
                        Register
                    </button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
