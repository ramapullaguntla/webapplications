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
        <form onSubmit={submitform} className="form-container">
            
            <FormInput label='Email' type='email' displayName='email' changeHandler={handleChange} value={email}/>

            <FormInput label='Password' type='password' displayName='password' changeHandler={handleChange} value={password}/>                      

            <button style={{ margin: "20px"}} type="submit">Sign In</button>
            <button style={{ margin: "20px"}} onClick={googleLogin} type="button">Google SignIN</button>
       </form>
        </div>);
}

export default SignIn;