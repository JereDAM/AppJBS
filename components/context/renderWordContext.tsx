import React from 'react'

type userAtributes = {
    user: string,
    login: boolean,
    handleLogin: Function,
    handleUser: Function,
    handleLogout: Function
}

const RenderUserContext = React.createContext({} as userAtributes)

export {RenderUserContext, userAtributes}
