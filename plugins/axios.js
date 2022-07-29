import cookies from 'js-cookie';

export default function ({$axios, store}, inject) {
    const API_URL = 'https://api.intelligilesolutions.com/wp-json';
    const instance = $axios.create({
        baseURL: API_URL,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        withCredentials: true
    });
    instance.interceptors.request.use(
        (config) => {
            const token = getToken(config.headers);
            if (!config.headers['Authorization'] && token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
    instance.interceptors.response.use(
        (response) => response,
        (error) => {

            if (error?.response?.status === 422) {
                const {errors} = error.response.data

                Object.keys(errors).map(function (key) {
                    errors[key] = errors[key][0]
                });

                error.response.data.errors = errors
            }

            return Promise.reject(error)
        }
    );
    inject('api', instance)
};

function getToken(headers) {
    if (cookies.get('x-access-token'))
        return cookies.get('x-access-token')

    if (headers && headers.common && headers.common.cookie) {
        let findItem = headers.common.cookie.split(";").find(item => item.includes('x-access-token'))

        return findItem ? findItem.split("=")[1] : ''
    }
}