import MainLayout from "@layouts/MainLayout";
import Label from "@atoms/Label";
import Button from '@atoms/Button';

export default function Sell(){
    return(
        <MainLayout  title = 'Sell'>
            <div className="flex flex-col w-full gap-10">
                <div className="flex flex-col items-center mt-10">
                    <Label hmlFor = 'adress'  required = {true}> Amount in BTC</Label>
                        <input type="text"  id="adress" className="m-3 border-2 border-black rounded-lg shadow-md w-80" />
                </div>
                <div className="flex flex-col items-center">
                    <Label hmlFor = 'adress'  required = {false}> Amount in USD</Label>
                    <input type="number"  id="adress" className="m-3 border-2 border-black rounded-lg shadow-md w-80" />
                </div>
            </div>
            <div className="flex mt-60">
                <Button to = '/market/home'>Sell</Button>
            </div>
           
        


        </MainLayout>
    )
}