export default function CardBalance(){
    return(
        <div className="box-content flex flex-col p-4 mx-10 my-10 border-2 border-black shadow-lg rounded-2xl bg-box md:w-80">
            <div className="flex justify-between">
                <p className="m-2 text-xl underline underline-offset-8">1.200,00 <span>USD</span></p>
                <img className="h-4 mt-3" src="../media/Dollar.png" alt="" />
            </div>
            <div className="flex justify-between mt-2">
                <p className="mx-4">4,002548 <span>BTC</span></p>
                <img className="ml-10" src="../media/bitCol.png" alt="" />
            </div>
        </div>
    )
}