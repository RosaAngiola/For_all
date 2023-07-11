import { Link } from 'react-router-dom';

export default function ButtonFoot({ className, title, to}){
    return(
        <Link to = {to}>
            <button className={ `border-2 border-black shadow m-3 w-24 drop-shadow-md bg-primary ${className}`}>
                {/* <h2 className='p-1 mx-2 underline text-body '>{text}</h2> */}
                <p className='p-1 uppercase'>{title}</p>
            </button>
        </Link>
    )
}