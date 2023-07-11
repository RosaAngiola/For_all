import { Link } from 'react-router-dom';
import ButtonSm from '@atoms/ButtonSm';
import BtnProfile from '@atoms/BtnProfile';



export default function NavNavigation(){
    return(
        <nav className="bg-secondary h-[125px] flex items-center gap-3 rounded-b-2xl drop-shadow-xl md:justify-between border-b border-gray-500">
            <img className="h-[100px] px-1" src="../media/logosenza.png" alt="Logo con signora che ha in mano un bitcoin" />
            <div className='w-60' >
                <ButtonSm className = ' rounded-l-3xl' text = 'Market' to = '/market/home' />
                <ButtonSm className = 'rounded-r-3xl' text = 'Wallet' to = '/Wallet/home' />
                
            </div>
                <BtnProfile to = '/profile/home' />
           
        </nav>
    )
}