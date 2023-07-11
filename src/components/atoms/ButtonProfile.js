import { Link } from 'react-router-dom';


export default function Button({children, to= '#', type = 'secondary', id}){

    const styles = {
            primary : 'bg-primary',
            secondary : 'bg-secondary',
            disabled : 'bg-disable',
            box: 'bg-box',
    }

    return(
      

        <button className="w-64 mx-auto ">
            
            <Link to= {to} id={id} className={"flex items-center justify-between w-full p-3  text-xl  border-2 border-black drop-shadow-md  rounded-xl shadow-slate-600 " + styles[type]}> 
                <p>{children}</p>
                <i className='mx-5 fa-solid fa-arrow-right'/>
            </Link>
            
        </button>
    )
   
}