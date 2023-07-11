import GuestRegister from "@layouts/GuestRegister";
import Button from "@atoms/Button";
import UploadDocuments from '@molecules/UploadDocument';




export default function Upload(){
    return(
        <>
        
        <GuestRegister 
        title = 'Upload your ID' >

            {/* atomi degli input di file, aperti sul cellulare ti rendirizzano alla fotocamera o ai tuoi file sul telefono */}

            <UploadDocuments id = 'foreheadID' text = 'Take a photo of your ID and Click to upload or drag and drop forehead'/>

            <UploadDocuments id = 'backID' text = 'Take a photo of your ID and Click to upload or drag and drop back' />

            <UploadDocuments id = 'photo' text = 'Take a yours photo and clik to Upload or drag and drop'/>

            <div className="flex mt-10">
                <Button to = '/login'  >
                    Login
                </Button>
            </div>

        </GuestRegister>
        
        </>
    )
}