import SignIn from "../SignIn/SignIn";
import SignUpForm from "../SignUp/SignUp";
import '../authentication/Authentication.css'

const Authentication = () =>
{
    return (
        <div className="authentication-container">
            <SignIn />
            <SignUpForm />
        </div>
    );
}

export default Authentication;