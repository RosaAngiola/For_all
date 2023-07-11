import { NavLink as Link } from 'react-router-dom';

export default function ButtonSm({text, className, to = '#'}){
    return(
        <Link 
           className={({isActive}) => isActive ? `text-white font-bold drop-shadow-2xl shadow-black text-xl` : `text-body  `} to = {to}>
            <button className={ `border-2 border-black  w-18  bg-primary ${className}`}>

                <h2 className='p-1 mx-2 '>{text}</h2>
            </button>
        </Link>
    )
}