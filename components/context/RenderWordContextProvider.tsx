import React from 'react'
import { RenderUserContext, userAtributes } from './renderWordContext'

type RenderWordProviderProps = {
    children : JSX.Element | JSX.Element[]
}

const RenderWordContextProvider = (props : RenderWordProviderProps) => {
  
  const {children} = props

  const [user, setUser]= React.useState('')
  const [passwordLogin, setPasswordLogin] = React.useState('')
  const [login, setLogin]= React.useState(false)
  const [error, setError]= React.useState('');

  const handleLogin = () => {
    if(user || passwordLogin != null){
      setLogin(true)
    }else{
      setError("No hay ni usuario o contraseña");
      setLogin(false)
    }
  }

  const handleUser = (NewUser : string) => {
    setUser(NewUser)
  }

  const defaultValue: userAtributes = {
    user,
    login,
    handleLogin,
    handleUser
  }
  
  return (
    <RenderUserContext.Provider value= {defaultValue}>
      {children}
    </RenderUserContext.Provider>
  
  )
}

export default RenderWordContextProvider