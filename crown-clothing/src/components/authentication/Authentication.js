import SignIn from "../SignIn/SignIn";
import SignUpForm from "../SignUp/SignUp";
import '../authentication/Authentication.css'

const Authentication = () =>
{
    return (
        <div className="flex flex-col space-y-8 items-center p-10 md:flex-row md:space-y-0 md:space-x-4 md:justify-center">
            <SignIn />
            <SignUpForm />
        </div>
    );
}

export default Authentication;