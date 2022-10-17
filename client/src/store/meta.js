import axios from '../axios';

export default {
  namespaced: true,
  state: {
    mainMenu: [],
    extraMenu: [],
    contacts: {},
    currentYear: '',
    error: '',
    isLoading: false,
    isRefresh: true
  },
  mutations: {
    setMainMenu(state, payload) {
      state.mainMenu = payload;
    },
    setExtraMenu(state, payload) {
      state.extraMenu = payload;
    },
    setContacts(state, payload) {
      state.contacts = payload;
    },
    setCurrentYear(state, payload) {
      state.currentYear = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setIsRefresh(state, payload) {
      state.isRefresh = payload;
    }
  },
  actions: {
    async fetchMeta({state, commit}) {
      try {
        if (!state.isRefresh) return;

        commit('setError', '');
        commit('setIsLoading', true);

        const response = await axios.get('/meta');
        const {data} = response;
        const extraMenu = data.extraMenu.map((item) => ({...item, isShow: false}));

        commit('setExtraMenu', extraMenu);
        commit('setMainMenu', data.mainMenu);
        commit('setContacts', data.contacts);
        commit('setCurrentYear', data.currentYear);
        commit('setIsLoading', false);
        commit('setIsRefresh', false);
      } catch ({message}) {
        commit('setError', message);
        commit('setIsLoading', false);
      }
    },
    controlModalExtraMenu({state, commit}, payload) {
      const extraMenu = state.extraMenu.map((item) => {
        const isShow = payload.isShow && payload.url === item.url ? true : false;

        return {
          ...item,
          isShow
        }
      });

      commit('setExtraMenu', extraMenu);
    }
  },
  getters: {
    mainMenu: (state) => state.mainMenu,
    extraMenu: (state) => state.extraMenu,
    contacts: (state) => state.contacts,
    currentYear: (state) => state.currentYear,
    error: (state) => state.error,
    isLoading: (state) => state.isLoading,
    isRefresh: (state) => state.isRefresh,
  },
}