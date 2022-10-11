const FormInput = ({type, label, displayName, changeHandler, value}) =>
{
    return (
        <div>
            <label>{label}</label>
            <input type= {type} required 
            name= {displayName} 
            onChange={changeHandler} 
            value={value}/>
        </div>
    );
}

export default FormInput;