import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../pages/api/authContext';

var signedIn: Boolean;
function SignedIn() {
    let value = useContext(AuthContext)
    const [signedIn, setSignedIn] = useState<Boolean>(false);
    useEffect(() => {
        setSignedIn(value[0].isSignedIn)
    })
    if (signedIn) {
        return (
            <>
                <div>
                    Hello {value[0].displayName}
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div>
                    You must sign in
                </div>
            </>
        )
    }
}

export default SignedIn;
