import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    // const { isLogin } = useAuth();
    return (
        <div>
            <h1>Please login</h1>
            <hr />

            <div>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;