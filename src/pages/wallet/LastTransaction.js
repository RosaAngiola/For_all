import MainLayout from "@layouts/MainLayout";
import ButtonFoot from '@atoms/ButtonFoot';
import Transaction from "@atoms/Transaction";



export default function Send(){
    const transactions = [
        {id :1, type : 'send', date :'01-04-23', amount : '120,00', conversion : '0,00451'},
        {id :2,  type : 'receive', date :'08-04-23', amount : '450,00', conversion : '0,05251'},
        {id: 3, type : 'receive', date :'15-05-23', amount : '852,00', conversion : '0,14251'},
        {id:4,  type : 'send', date :'04-05-23', amount : '352,00', conversion : '0,0584'},
        {id :5,  type : 'receive', date :'08-04-23', amount : '450,00', conversion : '0,05251'},
        {id: 6, type : 'receive', date :'15-05-23', amount : '852,00', conversion : '0,14251'},
        {id:7,  type : 'send', date :'04-05-23', amount : '352,00', conversion : '0,0584'},
        {id: 8, type : 'receive', date :'15-05-23', amount : '852,00', conversion : '0,14251'},
        {id:9,  type : 'send', date :'04-05-23', amount : '352,00', conversion : '0,0584'},
        {id :10,  type : 'receive', date :'08-04-23', amount : '450,00', conversion : '0,05251'},
        {id: 11, type : 'receive', date :'15-05-23', amount : '852,00', conversion : '0,14251'},
        {id:12,  type : 'send', date :'04-05-23', amount : '352,00', conversion : '0,0584'}
    ]
    return(
        <MainLayout  title = 'Transactions'>

            <div className="box-content flex flex-col items-center p-2 my-8 shadow-lg max-h-96 lg:max-w-[800px] lg:mx-auto">
                <div className="w-full overflow-y-scroll overscroll-y-contain">
            
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
                </div>
            </div>

            <div className="flex justify-center mt-20">
                <ButtonFoot className = 'rounded-2xl' to = '/wallet/send' title = 'Send'/>
                <ButtonFoot className = 'rounded-2xl' to = '/wallet/receive' title = 'Receive'/>
            </div>

        </MainLayout>
    )
}