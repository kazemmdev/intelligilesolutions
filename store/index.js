import cookies from "js-cookie";

export const state = () => ({
    loadedPosts: [],
    user: null,
})

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts;
    },

    SET_TOKEN(state, token) {
        cookies.set("x-access-token", token);
    },

    SET_USER(state, user) {
        state.user = user;
    },

    REMOVE_TOKEN() {
        cookies.remove("x-access-token");
    },

    REMOVE_USER(state) {
        state.user = null;
    },
}

export const actions = {
    setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
    },

    setToken({commit}, token) {
        commit("SET_TOKEN", token);
    },

    setUser({commit}, {user}) {
        commit("SET_USER", user);
    },

    async fetchUser({dispatch}) {
        const response = await this.$api.get("/wp/v2/users/me");
        dispatch("setUser", {user: response.data});
        return response.data
    },
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts;
    },

    getToken() {
        return cookies.get("x-access-token");
    },
}
