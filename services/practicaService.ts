const ADRIAN_API_URL = 'http://172.16.100.55:8888'
const TOTAL_REGISTROS_API = '/users/login'

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

export const loginUser = async (username : string, pwd : string) => {
  const newUser: RegisterUserJson = {
    name: username,
    email : '',
    password : pwd
  }
  console.log(newUser)
    const response = await fetch(
    ADRIAN_API_URL + '/users/login', getInitRequest('POST', newUser)
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

// export const registerUser = async (userName : string, email : string, pwd : string) => {

// }




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