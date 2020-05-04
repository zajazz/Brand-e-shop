import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goods: [],
    categories: {},
    // cart: [],
    // menuItems: [],
    // subcategories: [],
    // brands: [],
    // designers: [],
    // colors: [],
    // sizes: [],
    // materials: [],
  },
  mutations: {
    SET_CART_DATA(state, data) {
      console.log(data);
      state.cart = [...data];
    },
    SET(state, { type, items }) {
      console.log('SET Categories');
      state[type] = items;
      console.log(this.state.categories);
    },
  },
  actions: {
    // search({ commit }) {
    //   const regexp = new RegExp(this.searchSrting, 'i');
    //   this.filtered = this.$root.goods.filter((el) => regexp.test(el.name));
    //   console.log(this.filtered);
    // },

    fetchCategories({ commit }) {
      fetch('/api/categories')
        .then((result) => result.json())
        .then((data) => {
          console.log('fetchCategories');
          commit('SET', { type: 'categories', items: data });
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
     * @param state
     * @param type - property type
     * @param ids - array of indexes
     * @return {*} - array of elements filtered by indexes
     */
    PropsList(state, type, [ids]) {
      return state.categories[type].filter((el) => ids.includes(el.id));
    },
  },
});
