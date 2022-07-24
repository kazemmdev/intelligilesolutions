import Vuex from "vuex";
import cookies from "js-cookie";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            user: null
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },

            SET_TOKEN(state, token) {
                cookies.set('x-access-token', token);
            },

            SET_USER(state, user) {
                state.user = user;
            },

            REMOVE_TOKEN() {
                cookies.remove('x-access-token');
            },

            REMOVE_USER(state) {
                state.user = null;
            }
        },
        actions: {
            /*
            nuxtServerInit(vuexContext, context) {
              return axios.get('https://nuxt-blog.firebaseio.com/posts.json')
                .then(res => {
                  const postsArray = []
                  for (const key in res.data) {
                    postsArray.push({ ...res.data[key], id: key })
                  }
                  vuexContext.commit('setPosts', postsArray)
                })
                .catch(e => context.error(e));
            },
            */

            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            },

            setToken({commit}, token) {
                commit('SET_TOKEN', token);
            },

            setUser({commit}, {user}) {
                commit('SET_USER', user);
            },

            async fetchUser({dispatch}) {
                const response = await this.$api.get('/wp/v2/userprofile');
                console.log(response)
                dispatch('setUser', {user: response.data.payload})
            },
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },

            getToken() {
                return cookies.get('x-access-token')
            }
        }
    });
};

export default createStore;