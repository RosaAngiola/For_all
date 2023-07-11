export default function Send(){
    return(
        <div className="flex items-center justify-between mx-2">
            <p>
            <i className="mx-2 text-red-500 fa-regular fa-circle-down" />
            01-04-'23</p>
            <p>Send</p>
            <div className="flex flex-col">
                <div className="flex gap-2">
                    <p className="mx-2 underline underline-offset-1">125,00<span>  USD</span></p>
                    <img className="h-3 mt-1" src="../media/Dollar.png" alt="" />
                </div>
                <div className="flex gap-2">
                    <p className="text-sm ">0,0002541 <span>BTC</span></p>
                    <img className="h-4 " src="../media/SmallBitcoin.png" alt="" />
                </div>
            </div>
        </div>
    )
}