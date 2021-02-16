import jwt from 'jsonwebtoken'

export function isAuth(token){


    const tokenkey = token.token

    if(!tokenkey) return false;

    else{
        try{
            jwt.verify(tokenkey,process.env.REACT_APP_API_TOKEN);
            return true
           }catch(ex){
        
            console.log(ex)
            return false
        
           }
    }
  

}
