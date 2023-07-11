import { NavLink as Link } from 'react-router-dom';




export default function BtnProfile({to = '#' }){
    return(
        <div className='mx-3'>
            <Link to = {to}  className={({isActive}) => isActive ? `text-white font-bold drop-shadow-2xl` : `text-body  `}>
                <button className='w-16 h-16 border-2 border-black rounded-full bg-primary '>
                    <h2 className='w-full text-3xl '>RA</h2>
                </button>
            </Link>
        </div>
    )
}