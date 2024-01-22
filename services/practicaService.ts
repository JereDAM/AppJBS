const ADRIAN_API_URL = 'http://172.16.102.240:8888'
const LOGIN_USER_API = '/users/login'
const LOGOUT_USER_API = '/users/logout'
const REGISTER_USER_API = '/users/register'

export type RegisterUserJson = {
    name: string,
    email?: string,
    password: string
}

const getInitRequest = (httpVerb : string, body: RegisterUserJson) : RequestInit => {
  const init : RequestInit = {
    method: httpVerb,
    headers : {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },body : JSON.stringify(body)
  }
  return init
}

export const loginUser = async (userName : string, pwd : string) => {
  const newUser: RegisterUserJson = {
    name: userName,
    email : '',
    password : pwd
  }
  console.log(newUser)
  const response = await fetch(
    ADRIAN_API_URL + LOGIN_USER_API, getInitRequest('POST', newUser)
  );
  const json = await response.json()
  console.log(response.status);
  
  if(response.status === 401){
    console.log("NOOOOOOOOOOOOOOOOOOO");
    return null
  }if (response.status === 200) {
    return json
  } else {
    console.log("OTRO ERROOOOOOOOOOOOOOOR", response.status);
    return null
  }
}

export const registerUser = async (newUser : RegisterUserJson) => {
  
  const response = await fetch(
    ADRIAN_API_URL + REGISTER_USER_API, getInitRequest('POST', newUser)
  );
  const json = await response.json()
  console.log(response.status);

  if(response.status === 401){
    console.log("NOOOOOOOOOOOOOOOOOOO");
    return null
  }if (response.status === 200 || response.status === 201) {
    return json
  } else {
    console.log("OTRO ERROOOOOOOOOOOOOOOR", response.status);
    return null
  }
}

export const logOut = async (url:string) => {
  const init =  {
      method:'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
  }
  const response = await fetch(url,init)
  return response
}

export const userlogOut = async ()=>{
  try {
      const response = await logOut(`${ADRIAN_API_URL}${LOGOUT_USER_API}`);

      if (response.status === 200) {
        console.log(response.status);
        return response.json();
      } else {
        console.error("Error en la respuesta del servidor:", response);
        return null;
      }
    } catch (error) {
      console.error("Error al realizar la solicitud de login:", error);
      return null;
    }
}




// const getInitRequest = (httpVerb: string) => {
//     const init: RequestInit = {
//       method: httpVerb,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body:JSON.stringify( {
//         name: '',
//         email:'',
//         password: '',
// }),
//     }
//     return init;
// }


// try {
//   const response = await await fetch(
//     ADRIAN_API_URL,
//   );
//   const json = await response.json()
//   return json
// } catch (error) {
//   console.error(error)
// }

// let userInfo : UserInfo = ({
//   nombre : '',
//   email: '',
// })
//   try {
//       const request: RequestInfo = "http://localhost:8888/users/login"
//       const response = await fetch(request, getInitRequest('GET'))
//       const json = await response.json()

//       if(response.status == 200){
//         console.log('registrado papu');
        
//       } else {
//         console.log("ñao ñao");
//       }
//   } catch (error) {
//       console.error(error)
//   }
//   return userInfo

// export const getAllCurrentUsers = async (): Promise<UserInfo> => {
//     let users : UserInfo

//     try {
//         const request: RequestInfo = `${ADRIAN_API_URL}`
//         const response = await fetch(request, getInitRequest('POST'))
//         const json: RegisterUserJson = await response.json()
//         // if (json != null) {
//         //   users = json.name
//         // }
//         return users
//     } catch (error) {
//         console.error(error)
//     }

//     return users
// }

// export const getDogsFacts = async (totalFacts: string): Promise<string[]> => {
//     let facts: string[] = [];
  
//     const request: RequestInfo = `${DOGS_FACTS_API_URL}${FACTS_PATH}?number=${totalFacts}` ;
//     const response = await fetch(request, getInitRequest('GET'))
//     const json: DogsFactsJsonResponse = await response.json()
  
//     if (json != null) {
//       facts = json.facts
//     }
  
//     return facts;
//   }

// fetch(ADRIAN_API_URL, { //Funcion Fetch
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: '',
//     email: '',
//   }),
// });