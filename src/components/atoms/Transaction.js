export default function Transaction({type, date, amount, conversion}){
    return(
        <div className="flex items-center justify-between mx-10 my-1 text-sm md:text-lg md:mx-96">
            <p>
                {/* operatore ternario che fa comparire un icona anzichè un altra */}
                {type == 'send' ?  <i className="ml-2 text-red-500 fa-regular fa-circle-down" /> :  <i className="ml-2 text-secondary fa-regular fa-circle-up" /> }</p>
                <div >
                    <p  > {type} </p>
                    {date}
                </div>
            
            <div className="flex flex-col items-center">
                <div className="flex justify-between gap-2 my-1">
                    <p className="mx-2 underline underline-offset-4"> {type == 'send' ? '-' : '+'}  {amount}<span>  USD</span></p>
                   
                </div>
                <div className="flex justify-between gap-2">
                    <p className="text-[11px] ">{conversion} <span>BTC</span></p>
                    
                </div>
            </div>
        </div>
    )
}