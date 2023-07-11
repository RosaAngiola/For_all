import NavNavigation from "@molecules/NavNavigation";



export default function MainLayout({children, title}){
    function renderTitle(){
// funzione per avere il titolo della pagina con la lettera iniziale di colore diverso

        if(title){
            return(
                <h1 className="mx-auto text-3xl font-bold text-center "><span className="text-primary">{title[0]}</span>{title.slice(1)}</h1>
            )
        }
       
    }
    return(
        <div className="h-screen bg-body">
            <NavNavigation/>
        
            {renderTitle()}
            {children}
        </div>

    )
}