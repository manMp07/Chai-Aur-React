import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);

    const handleSetUser = (username, password) => {
        console.log("Setting User : ", {username, password});
        setUser({username , password});
    };

    return (
        <UserContext.Provider value={{user, setUser : handleSetUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;