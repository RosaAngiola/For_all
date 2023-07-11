import GuestRegister from "@layouts/GuestRegister";

import Label from "@atoms/Label";
import Input from '@atoms/Input';
import Button from "@atoms/Button";
// import { useState } from "react";
import {useRef} from 'react';


export default function Login({ required = false}){

// const [visible, notVisible] = useState(false);
const visible = useRef(false);

// con l'import dello UseState nella pagina AccessData, la costante e un operatore ternario sul type dell'input della password, sono riuscita ad inserire l'occultamento della password nell'input.
// in questa pagina ho usato lo UseRef ed ho ottenuto lo stesso risultato

    return(
        <>
        <GuestRegister
        // to = '/'
        title = 'Login' >
             
            <div className="box-content flex flex-col items-center gap-8 mx-8 shadow-lg p-7 my-7">
                <Label htmlFor = 'email'
                 required = {required}>Email</Label>
                 <Input
                 id = 'email'
                 type = 'email'
                 placeholder = 'Insert your Email' />
                
            </div>
            <div className="box-content flex flex-col items-center gap-8 mx-8 my-10 shadow-lg p-7">
                <Label htmlFor = 'passw'
                 required = {required}>Insert your Password</Label>
                 <Input
                 id = 'passw'
                 type = {visible ? 'password' : 'text'}
                 placeholder = 'Insert your Password' />
                
            </div>

            <div className="flex mt-40">
                <Button to = '/login/OTP'  >
                    Next
                </Button>
            </div>


        </GuestRegister>
        
        
        
        </>
    )
}