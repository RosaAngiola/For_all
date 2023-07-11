import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

// Arrow back funzione per tornare indietro dalla pagina precedente
export default function Arrow(){
    const navigate = useNavigate();

    function Back(){
        navigate(-1);
    }
    return(
        <Link onClick = {Back} className="p-3 mt-6">
            <i className="p-5 mt-6 fa-solid fa-arrow-left fa-2xl"></i>
        </Link>
    )
}