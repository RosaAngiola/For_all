import Input from "@atoms/Input";
import Label from "@atoms/Label";


export default function FormInput({text, htmlFor,  id, placeholder, type = 'text', required = false , value = ''}){
    return(
        <div className="flex flex-col">
        <Label
        htmlFor={htmlFor}
        required = {required}>
        {text}
        </Label>
        <Input
        type = {type}
        id = {id}
        placeholder = {placeholder} 
        defaultValue={value} />
     </div>   
    )
}