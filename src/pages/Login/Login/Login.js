import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
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
            <button onClick={handleGoogleLogin} className="btn btn-warning">Sign In With Google</button>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Login;