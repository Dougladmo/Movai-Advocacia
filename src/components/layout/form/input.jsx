export default function Input({Label, type, placeholder, name}) {
    return (
        <>
        <label>{Label}</label>
        <input type={type} name={name} placeholder={placeholder} required/>            
        </>
    )
}