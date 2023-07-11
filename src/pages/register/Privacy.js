import GuestRegister from "@layouts/GuestRegister";
import Radio from '@atoms/Radio';




export default function Privacy(){
    // const [accepted, setAccepted] = useState(false);

   

    return(
        <>
            <GuestRegister
            
            title = 'Privacy Policy' 
            >
                {/* container delle Privacy Policy */}
                 <div className="box-content flex flex-col items-center p-3 mx-8 my-3 shadow-lg max-h-40 bg-box lg:max-w-[800px] lg:mx-auto">
                    <div className="p-2 overflow-y-scroll border-2 border-black overscroll-y-contain">Il presente documento di privacy policy, aggiornato con il Regolamento UE (GDPR) 2016/679 relativo al trattamento dei dati personali, così come con il D.Lgs 181/18 che modifica il D.Lgs 196/2003, regola le modalità di trattamento dei dati raccolti da un sito internet durante la navigazione da parte dell'utente.

                    Esso ha lo scopo preciso di informare l'utente circa il trattamento dei suoi dati personali secondo quanto previsto dalla legge e dal recente Regolamento UE 679/2016, che ha modificato profondamente la disciplina.


                    Un sito web deve avere un Titolare del trattamento dei dati (Data Controller). Il titolare del trattamento è colui che ha potere decisionale e organizzativo sul trattamento, oltre che decidere le modalità di trattamento dei dati ed è il responsabile nei confronti del garante della privacy. Si possono nominare anche due o più contitolari. In questo caso, è obbligatorio che l'utente sappia quali siano le competenze di ogni contitolare, attraverso un link che indica l'accordo tra gli stessi.
                    </div>
                 </div>
            <h3 className="mx-auto text-2xl font-bold text-center "><span className="text-primary">T</span>erms and Conditions</h3>

        {/* container dei Termini e Condizioni */}
                 <div className="box-content flex flex-col items-center p-3 mx-8 mt-3 mb-8 shadow-lg max-h-40 bg-box  lg:max-w-[800px] lg:mx-auto">
                    <div className="p-2 overflow-y-scroll border-2 border-black overscroll-y-contain">Il presente documento di privacy policy, aggiornato con il Regolamento UE (GDPR) 2016/679 relativo al trattamento dei dati personali, così come con il D.Lgs 181/18 che modifica il D.Lgs 196/2003, regola le modalità di trattamento dei dati raccolti da un sito internet durante la navigazione da parte dell'utente.

                    Esso ha lo scopo preciso di informare l'utente circa il trattamento dei suoi dati personali secondo quanto previsto dalla legge e dal recente Regolamento UE 679/2016, che ha modificato profondamente la disciplina.


                    Un sito web deve avere un Titolare del trattamento dei dati (Data Controller). Il titolare del trattamento è colui che ha potere decisionale e organizzativo sul trattamento, oltre che decidere le modalità di trattamento dei dati ed è il responsabile nei confronti del garante della privacy. Si possono nominare anche due o più contitolari. In questo caso, è obbligatorio che l'utente sappia quali siano le competenze di ogni contitolare, attraverso un link che indica l'accordo tra gli stessi.
                    </div>
                </div>

        {/* atomo dell'input Radio per abilitare il button che fa proseguire nelle pagine */}
                <Radio/>
               
            </GuestRegister>
            
        </>

    )
}