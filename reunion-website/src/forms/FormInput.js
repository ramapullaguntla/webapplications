const FormInput = ({type, label, displayName, changeHandler, value}) =>
{
    return (
        <div className="grid grid-cols-2">
            <label className="text-xl font-medium text-center">{label}</label>
            <input className="p-1 border-2 border-gray-600 rounded-md" type= {type} required 
            name= {displayName} 
            onChange={changeHandler} 
            value={value}/>
        </div>
    );
}

export default FormInput;