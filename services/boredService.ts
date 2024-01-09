import { Float } from "react-native/Libraries/Types/CodegenTypes";

const BORED_API_URL = 'https://www.boredapi.com/api'
const BORED_API_ENDPOINT = '/activity'

type ActivitiesWhileBored = {
    activity : string;
    type: string;
    participants: number;
    price: Float;
    link: string;
    key: string;
    accessibility: string
}


/**
 * @param httpVerb Es la acción que va a tomar la consulta a la API (GET, POST, PUT, DELETE)
 * @returns Devuelve el objeto que necesita
 */

const getInitRequest = (httpVerb: string): RequestInit => {
    const init: RequestInit = {
        method: httpVerb,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
      return init;
}

export const getActivity = async (): Promise<string> => {
    let actividad: string =""

    const request: RequestInfo = `${BORED_API_URL}${BORED_API_ENDPOINT}`
    const response = await fetch(request, getInitRequest('GET'))
    const json: ActivitiesWhileBored = await response.json()

    if(json != null){
        actividad = json.activity
    }
    return actividad
}