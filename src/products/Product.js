import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../firebase.init';
import useFirebase from '../hooks/usefirebase';



const auth = getAuth(app)
const Product = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Knock!!!Knock!</h2>
            <h4>Who's there???</h4>
            <h1>{user ? user.displayName : "Bhooot!!"}</h1>

        </div>
    );
};

export default Product;