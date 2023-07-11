export default function UploadDocuments({id, text}){
    return(
        <>
        <div className="box-content flex flex-col items-center mx-20 my-5 shadow-lg max-h-40 bg-box lg:max-w-[800px] lg:mx-auto border-2 border-black border-dashed p-2">
                <label htmlFor= {id} className="w-40 ">
                   {text}
                </label>
                <input id =  {id} type = 'file' className="hidden"/>
        </div>
        
        
        </>
    )
}