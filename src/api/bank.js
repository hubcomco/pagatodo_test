import { API_URL } from "../utils/constants";

/**
 * Esta funcion obtiene los datos desde el API_URL
 * @returns {object} Responde un objeto JSON o null si no se puedo conectar al API_URL
 */
export async function getBanksApi() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}
