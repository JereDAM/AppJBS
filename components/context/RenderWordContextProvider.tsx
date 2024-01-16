import React from 'react'
import { RenderUserContext, userAtributes } from './renderWordContext'
import { RegisterUserJson } from '../../services/practicaService'

type RenderWordProviderProps = {
    children : JSX.Element | JSX.Element[]
}

const RenderWordContextProvider = (props : RenderWordProviderProps) => {
  
  const {children} = props

  const [user, setUser]= React.useState({
    name: '',
    email: '',
    password: ''
  })
  const [login, setLogin]= React.useState(false)
  const [registered, setRegistered] = React.useState(false)
  const [error, setError]= React.useState('');

  const handleLogin = () => {
    if(user.name != null){
      
      setLogin(true)
    }else{
      setError("No hay usuario o contraseña");
      setLogin(false)
    }
  }

  const handleLogout = () => {
    setLogin(false)
    setUser({
      name: '',
      email:'',
      password:''
    })
  }

  const handleUser = (NewUser : string, newEmail : string, newPassword : string) => {
    setUser({
      name: NewUser,
      email: newEmail,
      password : newPassword
    })
  }

  const defaultValue: userAtributes = {
    user,
    login,
    handleLogin,
    handleUser,
    handleLogout,
  }
  
  return (
    <RenderUserContext.Provider value= {defaultValue}>
      {children}
    </RenderUserContext.Provider>
  )
}

export default RenderWordContextProvider