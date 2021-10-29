import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <br />
            <br />
            <h1>Please login</h1>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <div>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Sign In With Google</button>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Login;