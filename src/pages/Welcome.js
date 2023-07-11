import Button from "@atoms/Button";
import { Link } from 'react-router-dom';

function Welcome() {
  return (
   <>
   <div className="flex flex-col h-screen justify-evenly bg-body">
      <header>
        <img className="w-full max-w-xs mx-auto " src="../media/CryptoForAll.png" alt="Immagine di Donna con un Bitcoin" />
        <h2 className="m-5 text-5xl font-bold text-center "><span className="text-primary">C</span>ripto For All</h2>
      </header>

      <div className="flex flex-col items-center justify-center">
        {/* button per andare alla pagina di registrazione perchè è importante conquistare nuove registrazioni */}
       <Button 
       to = '/register'>
        Sign Up
       </Button>
        
        {/* un link per accedere basta perchè chi si è già registrato sa come navigare */}
        <Link className="m-5 mx-auto text-2xl underline uppercase" to='/login'>Login</Link>
        
      </div>


   </div>
   
   
   </>
  );
}

export default Welcome;
