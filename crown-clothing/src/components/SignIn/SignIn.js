import { useState } from "react";
import { signInWithGooglePopup, signInWithEmail } from "../../utils/firebase/firebase.utils";
import FormInput from "../forminput/FormInput";


const SignIn = () =>
{
    const googleLogin = async () => 
    {
        const { user } = await signInWithGooglePopup();       
        console.log(user);        
    }

    const formDisplayFields = {       
        email : "",
        password: ""       
    };

    const [formFields, setFormFields] = useState(formDisplayFields);    
    const { email, password } = formFields;
    

    const resetForm = () =>
    {
        setFormFields(formDisplayFields);
    }

    const submitform = async (event) => 
    {
        event.preventDefault();
                
        try {

           await signInWithEmail(email, password);            
            
            resetForm();
            console.log("Signed with email and password");
            
        } 
        catch (error) {
            console.log("cannot sign in with the provided credentials -", error.message);
        }
        
    }

    const handleChange = (event) =>
    {
        var {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
       <div>        
        <form onSubmit={submitform} className="flex flex-col items-center space-y-5 ">
            
            <FormInput label='Email' type='email' displayName='email' changeHandler={handleChange} value={email}/>
            <FormInput label='Password' type='password' displayName='password' changeHandler={handleChange} value={password}/>
            
            <div className="space-x-2">
                <button className="bg-slate-500 rounded-md text-black py-1 text-center" type="submit">Sign In</button>
                <button className="bg-slate-500 rounded-md text-black py-1 text-center" onClick={googleLogin} type="button">Google SignIn</button>
            </div>                    
       </form>
        </div>);
}

export default SignIn;