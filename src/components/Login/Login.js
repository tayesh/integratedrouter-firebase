import React from 'react';
import useFirebase from '../../hooks/usefirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Log In!!</h3>
            <button onClick={signInWithGoogle}>Google Sign In</button>
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