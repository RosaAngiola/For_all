import MainLayout from "@layouts/MainLayout";
import Label from "@atoms/Label";
import Button from '@atoms/Button';

export default function Support(){
    return(
        <MainLayout  title = 'Support'>
            <div className="flex flex-col items-center w-full gap-5 ">
                <div className="flex flex-col mt-10">

                    {/* input con una selezione di scelta */}
                    <Label hmlFor = "problem"  required = {true}>Choose a  Problem
                    </Label>
                    <select name="selectedProblem" id = "problem" className="text-center border-2 border-black rounded-lg shadow-md bg-box w-72">
                            <option value="Choose your Problem">Choose your Problem</option>
                            <option value="Buy BTC">Buy BTC</option>
                            <option value="Receive">Receive</option>
                            <option value="My Transactions">My Transactions</option>
                            <option value="Withdrawal Address">Withdrawal Address</option>
                    </select>
                </div>

                <div className="flex flex-col ">
                    <Label hmlFor = 'message'  required = {true}> Message</Label>
                    <textarea name = "message" id="message" placeholder = "Insert your Message" className="p-2 border-2 border-black rounded-lg shadow-md bg-box w-72" rows={10} cols={40} />
                </div>
            </div>
            <div className="flex mt-20">
                <Button to = '/profile/home'>Send</Button>
            </div>
           
        


        </MainLayout>
    )
}