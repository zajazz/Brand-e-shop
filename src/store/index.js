import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: { searchDropdownItems: [3/* Woman */, 2/* Man */] },
    goods: [],
    menuItems: [],
    subcategories: [],
    brands: [],
    filtered: [],
    errors: [],
    currentCat: [],
    searchString: '',
  },
  mutations: {
    SET_CART_DATA(state, data) {
      console.log('SET_CART_DATA => ');
      state.cart = [...data];
    },
    SET_CATEGORIES(state, data) {
      console.log('SET_CATEGORIES => ');
      state.menuItems = [...data.menuItems];
      state.subcategories = [...data.subcategories];
      state.brands = [...data.brands];
    },
    SET_GOODS(state, data) {
      console.log('SET_GOODS => ');
      state.goods = [...data];
      state.filtered = [...data];
    },
    SET_ERROR(state, err) {
      console.log('SET_ERROR => ', err);
      state.errors.push(err);
    },
    SET_CURRENT_CAT(state, catID, subcatID) { // компонент каталога при загрузке вызывает setter
      console.log('SET_CURRENT_CAT => ');
      state.currentCat = [catID, subcatID];
    },
    SET_SEARCH_STRING(state, value) {
      state.searchString = value.trim();
      console.log('SET_SEARCH_STRING => ', state.searchString);
    },
    SET_FILTERED(state, data) {
      console.log('SET_FILTERED => ');
      state.filtered = [...data];
      console.log('State.filtered: ', state.filtered);
    },
  },
  actions: {
    fetchCategories({ commit }) {
      fetch('/api/categories')
        .then((result) => result.json())
        .then((data) => {
          // console.log('fetchCategories');
          commit('SET_CATEGORIES', data);
        })
        .catch((error) => {
          commit('SET_ERROR', { fetchCategories: error.message });
        });
    },
    fetchGoods({ commit }) {
      fetch('/api/goods')
        .then((result) => result.json())
        .then((data) => {
          // console.log('fetchGoods');
          commit('SET_GOODS', data);
        })
        .catch((error) => {
          commit('SET_ERROR', { fetchGoods: error.message });
        });
    },
    filterProducts({ commit, state }, sortBy) {
      console.log('filterProducts ', sortBy);
      if (state.goods.length) {
        let filtered = state.goods.slice();
        if (state.currentCat.length) {
          const catID = state.currentCat[0];
          const subcatID = state.currentCat[1];
          filtered = filtered.filter((el) => el.category === catID);
          if (subcatID) filtered = filtered.filter((el) => el.subcategory === subcatID);
        }
        if (state.searchString) {
          const regexp = new RegExp(state.searchString, 'i');
          filtered = filtered.filter((el) => {
            let brandName = state.brands.find((brand) => brand.id === el.brand).brand;
            return regexp.test(el.name) || regexp.test(brandName);
          });
        }
        /* Uses for sorting by number-type fields like price, sold, rating */
        if (sortBy) {
          filtered = filtered.sort((a, b) => b[sortBy] - a[sortBy]);
        }
        commit('SET_FILTERED', filtered);
      } else {
        commit('SET_ERROR', { filterProducts: 'Nothing to filter.' });
      }
    },
  },
  getters: {
    BROWSE_MENU_ITEMS(state) {
      const ids = state.settings.searchDropdownItems;
      console.log('g:BROWSE_MENU_ITEMS > ', ids);
      return state.menuItems.filter((item) => ids.includes(item.id));
    },
    /**
     * Method returns array of good's properties, such as colors, sizes and materials
     * @return {*} - array of elements filtered by indexes
     */
    // eslint-disable-next-line
    PROPS_LIST: (state) => function(type, ids) {
      // console.log('g:PROPS_LIST > ', state);
      return state[type].filter((el) => ids.includes(el.id));
    },
  },
});
