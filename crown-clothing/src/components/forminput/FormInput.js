const FormInput = ({type, label, displayName, changeHandler, value}) =>
{
    return (
        <div className="form-input">
            <label>{label}</label>
            <input type= {type} required 
            name= {displayName} 
            onChange={changeHandler} 
            value={value}/>
        </div>
    );
}

export default FormInput;