// import Button from "@atoms/Button";
import NavRegister from "@molecules/NavRegister";
import Arrow from "@atoms/Arrow";




export default function GuestRegister({children, to, title}){

// funzione per avere il titolo della pagina con la lettera iniziale di colore diverso

    function renderTitle(){
        if(title){
            return(
                <h1 className="mx-auto text-2xl font-bold text-center "><span className="text-primary">{title[0]}</span>{title.slice(1)}</h1>
            )
        }
       
    }




    return(
    <>
            <div className="h-screen bg-body">
                <NavRegister/>
                <Arrow to = {to} />
                {renderTitle()}
                {children}
               
              
            </div>
    
    
    </>

    )
}