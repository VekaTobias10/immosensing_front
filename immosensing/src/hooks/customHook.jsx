function useAuth (){
    let myToken = sessionStorage.getItem("token");

   //  myEmail !== null ? <div>Hay un usuario</div> : <div>Tienes que estar logueado</div>
   console.log(myToken);
    return  myToken !== null; //Esta función debe devolver true cuando tenga un email y false cuando no lo tenga
    
 }

 export default useAuth;