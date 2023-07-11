import MainLayout from "@layouts/MainLayout";
import Label from "@atoms/Label";
import Button from '@atoms/Button';

export default function Receive(){
    return(
        <MainLayout  title = 'Receive'>
            <div className="flex flex-col items-center w-full gap-10">
                <div className="flex w-32 h-32 mt-10">
                   <img className="p-1 border-2 border-black" src="../media/qr-code.webp" alt="" />
                </div>
                {/* Il wallet Address è solo una visualizzazione del proprio indirizzo di portafoglio */}
                <div className="flex flex-col items-center">
                    <Label hmlFor = 'adress'  required = {false}> Wallet Address</Label>
                    <input type="number"  id="adress" className="m-3 border-2 border-black rounded-lg shadow-md w-80" placeholder="mndvGsd5203215sDmjb" />
                </div>
            </div>
            <div className="flex mt-52">
                <Button to = '/wallet/home'>Copy Link</Button>
            </div>
           
        


        </MainLayout>
    )
}