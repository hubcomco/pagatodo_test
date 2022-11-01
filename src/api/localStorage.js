import AsyncStorage from "@react-native-async-storage/async-storage";
import { BANK_LIST } from "../utils/constants";

/**
 * Esta funcion guarda en el AsyncStorage la lista de bancos del API
 * @param {Object} banks Lista de bancos en formato JSON
 * @returns {Boolean} Si guardo correctamente en el Local Storage
 */
export async function setLocalBanksApi(banks) {
  await AsyncStorage.setItem(BANK_LIST, JSON.stringify(banks));
  const result = await AsyncStorage.getItem(BANK_LIST);
  return true;
}

/**
 *  Retorna un objeto con la lista de bancos desde el AsyncStorage o null si se presenta un error
 * @returns {object, null}
 */
export async function getLocalBanksApi() {
  try {
    const banks = await AsyncStorage.getItem(BANK_LIST);
    if (banks != null) {
      return JSON.parse(banks);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
