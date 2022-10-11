import { useState } from 'react'
import { createUserWithEmailPassword, createUserDocument} from '../../utils/firebase/firebase.utils'
import FormInput from '../forminput/FormInput';

const SignUpForm = () =>
{
    const formDisplayFields = {
        displayName : "",
        email : "",
        password: "",
        confirmpassword : ""
    };

    

    const [formFields, setFormFields] = useState(formDisplayFields);    
    const {displayName, email, password, confirmpassword} = formFields;

    const resetForm = () =>
    {
        setFormFields(formDisplayFields);
    }

    const submitform = async (event) => 
    {
        event.preventDefault();
        
        if(password !== confirmpassword)
        {
            console.log("Passwords do not match");
            return;
        }
        try {

            const { user } = await createUserWithEmailPassword(email, password);

            await createUserDocument(user, { displayName });
            resetForm();
            console.log("form submitted and user created");
            
        } 
        catch (error) {
            console.log("cannot create the user ", error.message);
        }
        
    }

    const handleChange = (event) =>
    {
        var {name, value} = event.target;

        console.log("name and value ", name, value);

        setFormFields({...formFields, [name]: value});
    }

    return (
    <div>
       
       <form onSubmit={submitform} >
         <FormInput label='Display Name' type='text' displayName='displayName' changeHandler={handleChange} value={displayName}/>
         
         <FormInput label='Email' type='email' displayName='email' changeHandler={handleChange} value={email}/>

         <FormInput label='Password' type='password' displayName='password' changeHandler={handleChange} value={password}/>

         <FormInput label='Confirm Password' type='password' displayName='confirmpassword' changeHandler={handleChange} value={confirmpassword}/>        

         <button type="submit">Sign Up</button>
       </form>
    </div>
    );
}

export default SignUpForm;