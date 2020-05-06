import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goods: Array,
    categories: Object,
    filtered: Array,
  },
  mutations: {
    SET_CART_DATA(state, data) {
      state.cart = [...data];
    },
    SET(state, { type, items }) {
      console.log('SET ', type);
      state[type] = items;
    },
  },
  actions: {
    fetchCategories({ commit }) {
      fetch('/api/categories')
        .then((result) => result.json())
        .then((data) => {
          commit('SET', { type: 'categories', items: data });
        })
        .catch((error) => {
          // TODO: компонент ошибок
          // this.$refs.error.setError(error);
          console.log(error);
        });
    },

    fetchGoods({ commit }) {
      fetch('/api/goods')
        .then((result) => result.json())
        .then((data) => {
          commit('SET', { type: 'goods', items: data });
        })
        .catch((error) => {
          // TODO: компонент ошибок
          // this.$refs.error.setError(error);
          console.log(error);
        });
    },

    /**
     * Method makes api-requests and updates data.
     * @param commit
     * @param url
     * @param method - POST, PUT or DELETE
     * @param data
     */
    makeRequest({ commit }, url, method, data) {
      const mth = method;
      const req = {
        method: mth,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
      fetch(url, req)
        .then((result) => result.json())
        .then((content) => {
          commit('UPDATE_CART', content);
        })
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
  },
  getters: {
    MENU_ITEMS(state) {
      return state.categories.menuItems;
    },
    SUBCATS(state) {
      return state.categories.subcategories;
    },
    CartData(state) {
      return state.cart;
    },
    CatList(state, type) {
      let list;
      if (type) list = state.categories[type];
      else list = state.categories;
      return list;
    },
    Category(state, type, id) {
      return state.categories[type].find((el) => el.id === id);
    },
    /**
     * Method return array of good's properties, such as colors, sizes and materials
     * @return {*} - array of elements filtered by indexes
     */
    // eslint-disable-next-line
    PropsList: (state) => function(type, ids) {
      console.log('PropsList => ', state);
      return state.categories[type].filter((el) => ids.includes(el.id));
    },
    // eslint-disable-next-line arrow-body-style
    Filtered: (state) => ({ qty, searchString, sortBy }) => {
      let filteredArr = state.goods.slice();
      if (sortBy) {
        filteredArr = filteredArr.sort((a, b) => b[sortBy] - a[sortBy]);
      }
      if (searchString) {
        const regexp = new RegExp(searchString, 'i');
        filteredArr = filteredArr.filter((el) => regexp.test(el.name));
      }
      if (qty) {
        filteredArr = filteredArr.slice(0, qty);
      }
      return filteredArr;
    },

  },
});
