import React,{useState} from 'react';
import {useSignup} from '../hooks/useSignup';

export default function Signup() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const {error,signup} = useSignup();

    const handleSubmit = (e) =>{
        e.preventDefault()
        signup(Email,Password)
        setEmail('')
        setPassword('')
    }
    return (
    <div>
        <h2>Üye Ol</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email Adresiniz:</span>
                <input required type="text" onChange={(e)=>setEmail(e.target.value)} value={Email}/>
                <span>Şifreniz</span>
                <input required type="password" onChange={(e)=>setPassword(e.target.value)} value={Password}/>
            </label>
            <button>Üye Ol</button>
            {error && <p>{error}</p>}
        </form>

    </div>
    )
}
