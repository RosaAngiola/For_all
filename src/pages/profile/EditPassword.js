import Button from "@atoms/Button";
import FormInput from "@molecules/FormInput";
// import Title from "@atoms/Title";
import MainLayout from "@layouts/MainLayout";
import { useState } from "react";

// con lo UseState , una costante e un operatore ternario ho ottenuto l'inserimento automatico dell'occhietto per l'input password

export default function EditPassword(){

    const [visible, notVisible] = useState(false);


    return(
        <>
        <MainLayout 
        title = 'Edit Password' >

            <div className="box-content flex flex-col items-center gap-8 mx-8 my-20 shadow-lg p-7 bg-box">
            
           
            <FormInput
            htmlFor = 'oldPassword'
            id = 'oldPassword'
            placeholder = 'Courrent Password'
            required = {true}
            type = {visible ? 'text' : 'password'}
            text = 'courrent Password' />  
          
            <FormInput
            htmlFor = 'Password'
            id = 'Password'
            placeholder = 'Insert'
            required = {true}
            type = {visible ? 'text' : 'password'}
            text = 'Insert a Password' />  

            <FormInput
            htmlFor = 'confirm'
            id = 'confirm'
            placeholder = 'Confirm'
            required = {true}
            type = {notVisible ? 'password' : 'text'}
            text = 'Confirm your Password' />  
                
            </div>
            <div className="flex mt-36">
                <Button to = '/profile/home'>
                    Confirm
                </Button>
            </div>
        
        </MainLayout>
        </>
    )
}