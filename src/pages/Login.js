import {useState} from 'react';
import { useLogin } from '../hooks/useLogin'; 

export default function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const {error,login} = useLogin();

    const handleSubmit = (e) =>{
        e.preventDefault()
        login(Email,Password)
        setEmail('')
        setPassword('')
    }
    return (
    <div>
        <h2>Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email Adresiniz:</span>
                <input required type="text" onChange={(e)=>setEmail(e.target.value)} value={Email}/>
                <span>Şifreniz</span>
                <input required type="password" onChange={(e)=>setPassword(e.target.value)} value={Password}/>
            </label>
            <button>Giriş Yap</button>
            {error && <p>{error}</p>}
        </form>
    </div>
    )
}
