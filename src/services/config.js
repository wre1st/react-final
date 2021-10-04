
const endpoints = {
    auth: {
        login: 'auth/login'
    }
}

const development = {
    base: 'http://localhost:4000/',
    endpoints: endpoints
}

const production = {
    base: 'http://localhost:1767/',
    endpoints: endpoints
}

export default process.env.NODE_ENV === 'production'? production: development