

export function useAuth (){
    let myToken = sessionStorage.getItem("token");
   console.log(myToken);
    return  myToken !== null; 
    //Esta función debe devolver true cuando tenga un token y false cuando no lo tenga  
 }



export function useSession(){
    return sessionStorage.getItem('token'); 
}

//Eliminar el token

export const useRemoveToken = () => { 
    return sessionStorage.removeItem("token");
  }


// export function useSessionBcnOpenData(){
//     let token = '041eeecd7d65f7d9c315cb9ccc5944dbc6d6316a37f9ff9a836ebb565d7a0e39';
//     return token;
// }
 