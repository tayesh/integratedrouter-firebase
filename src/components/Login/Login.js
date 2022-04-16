import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';


const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    return (
        <div>
            <h3>Please Log In!!</h3>
            <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value='Login' />
            </form>
        </div>
    );
};

export default Login;