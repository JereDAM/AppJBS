import React from 'react'
import { RegisterUserJson } from '../../services/practicaService'

type userAtributes = {
    user: RegisterUserJson,
    login: boolean,
    handleLogin: Function,
    handleUser: Function,
    handleLogout: Function,
}

const RenderUserContext = React.createContext({} as userAtributes)

export {RenderUserContext, userAtributes}
