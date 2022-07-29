import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
    createPersistedState({
        key: 'current_user',
        paths: ['user']
    })(store)
}
