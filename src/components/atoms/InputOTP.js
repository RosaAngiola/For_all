import { useRef } from 'react';


export default function InputOTP(){
    const inputRefs = useRef([]);

    // Avanza al campo successivo se il valore è una singola cifra

    const handleInputChange = (e, index) => {
      const value = e.target.value;  
      
      if (value.length === 1 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    };


    // Torna al campo precedente se il campo corrente è vuoto e viene premuto il tasto backspace
  
    const handleInputBackspace = (e, index) => {
      
      if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    };


    return( <>
        {[0, 1, 2, 3, 4, 5].map((index) => (
        <input type="number"  
        placeholder='0' 
        className="w-12 h-12 text-2xl text-center border border-black rounded-xl"  
        key={index} 
        maxLength={1}
        onChange={(e) => handleInputChange(e, index)}
        onKeyDown={(e) => handleInputBackspace(e, index)}
        ref={(ref) => (inputRefs.current[index] = ref)} />
        ))}
    
    </>
    )
}