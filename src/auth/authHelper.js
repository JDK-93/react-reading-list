import Axios from 'axios'
const TOKEN_KEY = 'token';

//Guardamos token en localStorage
export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

//Leer token de localStorage
export function getToken() {
    const aux = JSON.parse(localStorage.getItem('user'))
    return aux.token
}

//Eliminar token de localStorage
export function deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
}

//Interceptar llamadas con axios
export function initAxiosInterceptors() {
    Axios.interceptors.request.use(function (config) {
        const token = getToken();

        if (token) {//si el token existe lo agregamos a la llamada
            config.headers.Authorization = `bearer ${token}`
            //config.headers.token = `Bearer ${token}`
        }
        return config;
    });
    //Interceptor para respuestas (si el server se queja por ejemplo, o token se venció)
    Axios.interceptors.response.use(
        function (response) { //sil a llamada es exitosa, que pase?
            return response;
        },
        function (error) {
            if (error.response.status === 401) { //si el error es de tipo 401, borramos token y direccionamos a login
                deleteToken();
                window.location = '/login'
            } else {
                return Promise.reject(error);
            }
        }
    )
}