import MainLayout from "@layouts/MainLayout";
import Button from "@atoms/Button";
import FormInput from "@molecules/FormInput";

export default function EditUserData(){
    return(
        <>
        <MainLayout 
       
        title = 'Edit User Data' >
            <div className="box-content flex flex-col items-center gap-4 mx-8 shadow-lg my-7 p-7 bg-box">

            <FormInput
             htmlFor = 'Address'
             id = 'Address'
             placeholder = 'Insert your Address'
             required = {false}
             text = 'Address' />
             <FormInput
             htmlFor = 'City'
             id = 'City'
             placeholder = 'Insert your City'
             required = {false}
             text = 'City' />
            
             <FormInput
             htmlFor = 'Type Document'
             id = 'Type Document'
             placeholder = 'Type Document'
             required = {false}
             text = 'Type Document' />
             <FormInput
             htmlFor = 'Number Document'
             id = 'Number Document'
             placeholder = 'Number Document'
             required = {false}
             text = 'Number Document' />
             <FormInput
             htmlFor = 'Telephone'
             id = 'Telephone'
             placeholder = 'Insert your Telephone'
             required = {false}
             type = 'number'
             text = 'Telephone' />
              <FormInput
            htmlFor = 'email'
            id = 'email'
            placeholder = 'Insert your Email'
            required = {true}
            type = 'email'
            text = 'Email' />  



            </div>
            <div className="flex mt-10">
                <Button to = '/profile/home'>
                    Confirm
                </Button>
            </div>


        </MainLayout>
       
        
        </>
    )
}