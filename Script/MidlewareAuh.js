import axios from 'axios';
import { setAuthorizationToken } from './MiddlewareSetToken'; 


export async function Auth() {
    setAuthorizationToken();
    try {
        const response = await axios.post('https://campusprob-43ea2325dc3f.herokuapp.com/api/auth');

        if (response.status !== 201 ){
            window.location.href = 'https://campus-pro.vercel.app/login';
        }

    }catch (error){
        window.location.href = 'https://campus-pro.vercel.app/login';    
        return false;
    }

}