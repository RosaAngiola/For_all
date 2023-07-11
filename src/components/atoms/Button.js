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
            <Link to= {to} id={id} className={`flex items-center justify-center w-full p-3  text-2xl underline uppercase border-2 bg-secondary border-black drop-shadow-md rounded-xl shadow-slate-600 ` + styles[type]}>
            <p>{children}</p>
            </Link>
        </button>
    )
   
}