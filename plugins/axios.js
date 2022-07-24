import cookies from 'js-cookie';

export default function ({$axios}, inject) {

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
            const token = cookies.get('x-access-token');

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