import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../pages/api/authContext';


function SignedIn() {
    let value = useContext(AuthContext)
    if (value[0] !== undefined) {
        if (Boolean(value[0].isSignedIn)) {
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
    return (
        null
    )
}

export default SignedIn;
