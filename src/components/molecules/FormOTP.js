import InputOTP from '@atoms/InputOTP';
import { useState, useEffect } from 'react';

export default function(){
    const [countdown, setCountdown] = useState(20);

    useEffect(() => {
        const timer = setTimeout(() => {
          if (countdown > 0) {
            setCountdown(countdown - 1);
          } else {
            window.location.reload(); // Riaggiorna la pagina quando il conto alla rovescia raggiunge zero
          }
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [countdown]);

      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };
    return(
        <>
        <h3 className='m-8 font-semibold text-center'>We have sent you an OTP to your email address. Please enter the OTP below to verify your email address.</h3>
        <div className="flex justify-between mx-3 my-10">
            <InputOTP/>
           
        </div>
        <p className='text-center '><span className='font-semibold'>Send new OTP in : </span>{formatTime(countdown)}</p>
        
        
        </>
    )
}