import GuestRegister from "@layouts/GuestRegister";
import Button from "@atoms/Button";
import FormOTP from "@molecules/FormOTP";



export default function LoginOTP(){
   
    return(
        <>
        <GuestRegister
       
        title = 'Login' >
             
           <FormOTP></FormOTP>

            <div className="flex mt-52">
                <Button to = '/wallet/Home'>
                    Login
                </Button>
            </div>


        </GuestRegister>
        
        
        
        </>
    )
}