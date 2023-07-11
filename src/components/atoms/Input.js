export default function Input( {type = 'text', placeholder, id, value = ''}){

    return(
                
        <input 
        type={type} 
        id ={id} 
        className="bg-transparent border-b-2 border-b-black file:border-0" 
        placeholder={placeholder}
        defaultValue={value}
       
        />
     
    )
    
}