export default async function ({redirect, store}) {
    if (!store.state.user) {
        return await store.dispatch('fetchUser').catch(() => {
            redirect({name: 'login'})
        });
    }
}
