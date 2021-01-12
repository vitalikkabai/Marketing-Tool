import React, {useEffect, useState} from "react";
import {Auth} from "aws-amplify";


const LoginPage = () => {
    const [userName, setUserName] = useState();

    // useEffect(() => {
    //     Auth.currentUserInfo().then(user => {setUserName(user.attributes.email)})
    //     }, [])

    return <div>
        <h1>Welcome to dashboard dear {userName}</h1>
    </div>
}


export default LoginPage;