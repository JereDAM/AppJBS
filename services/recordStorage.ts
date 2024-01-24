import AsyncStorage from "@react-native-async-storage/async-storage";
import { RecordFile } from "../screens/RecordingScreen";


//Esta función guarda el objeto que se le pasa
export const storeAudios = async (value : RecordFile[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('userRecordFile', jsonValue);
    } catch (e) {
      console.error("Algo salió mal al guardar los audios");
    }
};

//Esta función lee los datos almacenados
export const getAudios = async ():Promise<RecordFile[] | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem('userRecordFile');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error("Algo salió mal al obtener los audios");
    }
    return null
};
