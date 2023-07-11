import { useState } from 'react';
import { Link } from 'react-router-dom';


// radio button che abilita o disabilita il bottone per andare avanti
export default function Radio(){

    const [accepted, setAccepted] = useState(false);


    return(
        <>
        <div className="mx-auto text-center">
                    
            <input id="draft" className="peer/draft" type="radio" name="accetto" onChange = {()=> setAccepted(true)} checked = {accepted} />
        
                <label htmlFor="draft" className="pr-3 mx-3 peer-checked/draft:text-secondary">Accept</label>

            
            <input id="published"  className="peer/published" type="radio" name="non-accetto" onChange={()=> setAccepted(false)} checked = {!accepted} />
        
                <label htmlFor="published"  className="mx-3 peer-checked/published:text-secondary">Rejection</label>
        </div>
        <div className="flex mt-6"  >
            <div className="w-64 mx-auto">
            <Link to = {!accepted ? '' : '/register/Upload'}>
            <button className={ !accepted ? "flex items-center justify-center w-full p-3  text-2xl underline uppercase border-2 border-black drop-shadow-md bg-disable rounded-xl shadow-slate-600 "  : "flex items-center justify-center w-full p-3  text-2xl underline uppercase border-2 border-black drop-shadow-md bg-secondary rounded-xl shadow-slate-600 " } disabled={!accepted} >AVANTI
            </button>
            </Link>
            </div>
            
        </div>
     </>
    )
}