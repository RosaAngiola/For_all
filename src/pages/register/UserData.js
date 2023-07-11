import GuestRegister from "@layouts/GuestRegister";
import Button from "@atoms/Button";
import FormInput from "@molecules/FormInput";

export default function UserData(){
    return(
        <>
        <GuestRegister 
        // to = '/register'
        title = 'Enter your details' >
            <div className="box-content flex flex-col items-center gap-4 mx-8 shadow-lg my-7 p-7 bg-box">

            <FormInput
             htmlFor = 'Address'
             id = 'Address'
             placeholder = 'Insert your Address'
             required = {true}
             text = 'Address' />
             <FormInput
             htmlFor = 'City'
             id = 'City'
             placeholder = 'Insert your City'
             required = {true}
             text = 'City' />
             <FormInput
             htmlFor = 'Birthday'
             id = 'Birthday'
             placeholder = 'Insert your Birthday'
             required = {true}
             type = 'data'
             text = 'Birthday' />
             <FormInput
             htmlFor = 'Type Document'
             id = 'Type Document'
             placeholder = 'Type Document'
             required = {true}
             text = 'Type Document' />
             <FormInput
             htmlFor = 'Number Document'
             id = 'Number Document'
             placeholder = 'Number Document'
             required = {true}
             text = 'Number Document' />
             <FormInput
             htmlFor = 'Telephone'
             id = 'Telephone'
             placeholder = 'Insert your Telephone'
             required = {true}
             type = 'number'
             text = 'Telephone' />



            </div>
            <div className="flex mt-10">
                <Button to = '/register/Privacy'>
                    Next
                </Button>
            </div>


        </GuestRegister>
       
        
        </>
    )
}