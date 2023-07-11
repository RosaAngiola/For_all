import Button from "@atoms/Button";
import FormInput from "@molecules/FormInput";
// import Title from "@atoms/Title";
import GuestRegister from "@layouts/GuestRegister";
import { useState } from "react";
// con l'import dello UseState , la costante e un operatore ternario sul type dell'input della password, sono riuscita ad inserire l'occultamento della password nell'input.


export default function AccessData(){

    const [visible, notVisible] = useState(false);


    return(
        <>
        <GuestRegister 
        title = 'Build your Account' >
            
            <div className="box-content flex flex-col items-center gap-8 mx-8 shadow-lg p-7 bg-box my-7">
            
            <FormInput
            htmlFor = 'email'
            id = 'email'
            placeholder = 'Insert your Email'
            required = {true}
            type = 'email'
            text = 'Email' />  

            <FormInput
            htmlFor = 'Name'
            id = 'Name'
            placeholder = 'Insert your Name'
            required = {true}
            text = 'Name'
             />  

            <FormInput
            htmlFor = 'Surname'
            id = 'Surname'
            placeholder = 'Surname'
            required = {true}
            text = 'Surname' />  

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
            <div className="flex mt-10">
                <Button to = '/register/UserData'>
                    Next
                </Button>
            </div>
        
        </GuestRegister>
        </>
    )
}