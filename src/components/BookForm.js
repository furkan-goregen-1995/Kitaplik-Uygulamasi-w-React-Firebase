import { addDoc, collection } from 'firebase/firestore';
import React,{useState} from 'react'
import {db} from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

export default function BookForm() {

const [NewBook, setNewBook] = useState('')
const {user} = useAuthContext();

const handleSubmit = async(e) =>{
    e.preventDefault();
    const ref=collection(db,'books');
    addDoc(ref,{
        title:NewBook,
        uid: user.uid 
    })
    setNewBook('')
}
    return (

        <form onSubmit={handleSubmit}>
            <label>
                <span>Yeni Kitap Ekle</span>
                <input type="text" required onChange={(e)=>setNewBook(e.target.value)} value={NewBook} />
            </label>
            <button>EKLE</button>
        </form>
    )
}
