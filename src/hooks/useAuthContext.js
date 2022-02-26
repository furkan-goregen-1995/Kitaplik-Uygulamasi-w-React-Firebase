import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuthContext = () =>{
    const context = useContext(AuthContext);

    if(!context){
        console.log('Context bulunamadı!');
    }

    return context;
}