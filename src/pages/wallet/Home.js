
import CardBalance from '@atoms/CardBalance';
import { Link } from 'react-router-dom';
import Transaction from "@atoms/Transaction";
import ButtonFoot from '@atoms/ButtonFoot';
import Button from "@atoms/Button";
import MainLayoutHome from '@layouts/MainLayoutHome';



export default function Home(){

const transactions = [
    {id : 1, type : 'send', date :'01-04-23', amount : '120,00', conversion : '0,00251'},
    {id :2,  type : 'receive', date :'08-04-23', amount : '450,00', conversion : '0,05251'},
    {id: 3, type : 'receive', date :'15-05-23', amount : '852,00', conversion : '0,14251'},
    {id:4,  type : 'send', date :'04-05-23', amount : '352,00', conversion : '0,0584'}
]


    return(
        <>
         {/* <div className="flex flex-col h-screen justify-evenly bg-body"> */}

           <MainLayoutHome>
            <CardBalance/>
            {/* anche h2 è un link di accesso alle utime transazioni per facititarne l'usabilità */}
            <Link to = '/wallet/transaction' className="mx-auto my-1 md:my-3 ">
            <h2 className="text-xl font-semibold text-center md:text-3xl ">Latest Transactions</h2>
            </Link>

            <div className="flex justify-center gap-10 my-5 underline md:justify-evenly md:my-2 underline-offset-8">
                <p>Description</p>
                <p>Amount</p>
            </div>
{/* ciclo .map su una costante custom, ma dovrebbe essere collegata ad un file .json */}
                {  transactions.map((transaction ) => {
                    return(
                            <Transaction 
                            key = {transaction.id} 
                            type ={transaction.type} 
                            date ={transaction.date} 
                            amount = {transaction.amount} 
                            conversion = {transaction.conversion} />
                            )
                })}
            
            <div className="flex justify-center mt-5">
                <ButtonFoot className = 'rounded-2xl' to = '/wallet/send' title = 'Send'/>
                <ButtonFoot className = 'rounded-2xl' to = '/wallet/receive' title = 'Receive'/>

            </div>
            <div className="flex my-8 md:my-3">
                <Button to = '/wallet/transaction' type ="secondary" >Transactions </Button>
            </div>

           
            </MainLayoutHome>
         {/* </div> */}
        </>
    )
}