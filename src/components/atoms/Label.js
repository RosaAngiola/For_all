export default function Label({children, htmlFor, required = false}){
    return(
        // il required è per inserire l'asterisco se il campo input è da complilare obbligatoriamente
        <label htmlFor={htmlFor}> {children} {required && <span className="text-red-600">*</span>}
        </label>

    )
}