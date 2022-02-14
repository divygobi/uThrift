import React, { ContextType, useContext, useState } from "react";
import { userData } from "../../FirebaseConfig/firebase";

var func!: React.Dispatch<React.SetStateAction<userData>>;
var setUser!: (bool: Boolean) => void;
var user!: userData;

// function wrap() {
//     var userdataHi: userData = {
//         isSignedIn: false,
//     }

//     const [UserData, setUserData] = useState(userdataHi)
//     setUser = (bool: Boolean) => {
//         if (!bool) {
//             setUserData({
//                 isSignedIn: false
//             });
//         }
//     }
//     func = setUserData;
//     user = userdata;
// }



export const AuthContext: React.Context<[userData, React.Dispatch<React.SetStateAction<userData>>
]> = React.createContext([user, func]);


