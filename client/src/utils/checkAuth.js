import { urlUsers } from "../myURL";
import processResponse from "./ProcessResponse";

const checkAuth=(token, userId)=>{
    const isAuth = false
    if(token){
        
        fetch(urlUsers+'/current',{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
        .then(processResponse)
        .then(res=>{
            console.log(res)
            const{json} = res
            
        });
        
       
    } else return isAuth
}

export default checkAuth;