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
  const [userRegister, setUserRegister] = React.useState('')
  const [newUserPassword, setnewUserPassword ] = React.useState('')
  const [userMail, setUserMail] = React.useState('')
  const [registered, setRegistered] = React.useState(false)

  const handleLogin = () => {
    if(user && passwordLogin != null){
      setLogin(true)
    }else{
      setError("No hay ni usuario o contraseña");
      setLogin(false)
    }
  }

  const handleLogout = () => {
    setLogin(false)
  }

  const handleRegistration = () => {
    if(userRegister && newUserPassword && userMail != null){
      setUser(userRegister)
      setUserMail(userMail)
      setPasswordLogin(newUserPassword)
      setRegistered(true)
    }else{
      setError("No existe nombre de usuario, email o contraseña")
    }
  }

  const handleUser = (NewUser : string, newEmail : string, newUserPassword : string) => {
    setUser(NewUser)
    setUserMail(newEmail)
    setPasswordLogin(newUserPassword)
  }

  const defaultValue: userAtributes = {
    user,
    login,
    handleLogin,
    handleUser,
    handleLogout,
    handleRegistration
  }
  
  return (
    <RenderUserContext.Provider value= {defaultValue}>
      {children}
    </RenderUserContext.Provider>
  )
}

export default RenderWordContextProvider