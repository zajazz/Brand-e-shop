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
    cart: [],
    tmp: [],
  },
  mutations: {
    SET_CART_DATA(state, data) {
      console.log('SET_CART_DATA => ');
      state.cart = [...data];
    },
    ADD_TO_CART(state, data) {
      console.log('ADD_TO_CART => ');
      state.cart.push(data);
    },
    UPDATE_CART_DATA(state, data) {
      console.log('UPDATE_CART_DATA => ');
      // data: { url, id, quantity }
      const idx = state.cart.findIndex((el) => el.id === data.id);
      state.cart[idx].quantity = data.quantity;
    },
    DELETE_FROM_CART(state, id) {
      console.log('DELETE_FROM_CART => ', id);
      const idx = state.cart.findIndex((el) => el.id === id);
      state.cart.splice(idx, 1);
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
    SET_CURRENT_CAT(state, params) {
      state.currentCat[0] = params.id ? +params.id : 0;
      state.currentCat[1] = params.subid ? +params.subid : 0;
      // console.log('SET_CURRENT_CAT => ');
    },
    SET_SEARCH_STRING(state, value) {
      state.searchString = value.trim();
      console.log('SET_SEARCH_STRING => ', state.searchString);
    },
    SET_FILTERED(state, data) {
      console.log('SET_FILTERED => ');
      state.filtered = [...data];
    },
    TMP(state, data) {
      state.tmp = [...data];
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
      // console.log('filterProducts ');
      if (state.goods.length) {
        let filtered = state.goods.slice();
        if (state.currentCat.length && state.currentCat[0]) {
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
    fetchCartData({ commit }) {
      fetch('/api/cart')
        .then((result) => result.json())
        .then((data) => {
          // console.log('fetchCartData');
          commit('SET_CART_DATA', data);
        })
        .catch((error) => {
          commit('SET_ERROR', { fetchCartData: error.message });
        });
    },
    putJson({ commit }, dataObj) {
      fetch(`/api/cart/${dataObj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: dataObj.quantity })
      })
        .then((result) => result.json())
        .then((data) => {
          if (data.result === 1) {
            commit('UPDATE_CART_DATA', dataObj);
          }
        })
        .catch((error) => {
          commit('SET_ERROR', { putJson: error.message });
        });
    },
    postJson({ commit }, dataObj) {
      // console.log('postJson', dataObj.prod);
      return fetch(dataObj.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataObj.prod)
      }).then((result) => result.json())
        .then((data) => {
          /* если на сервере добавили, добавляем на фронте */
          if (data.result === 1) {
            commit('ADD_TO_CART', dataObj.prod);
          }
        })
        .catch((error) => {
          commit('SET_ERROR', { postJson: error });
        });
    },
    deleteJson({ commit }, itemId) {
      fetch(`/api/cart/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((result) => result.json())
        .then((data) => {
          /* если на сервере добавили, добавляем на фронте */
          if (data.result === 1) {
            commit('DELETE_FROM_CART', itemId);
          }
        })
        .catch((error) => {
          commit('SET_ERROR', { deleteJson: error });
        });
    },
  },
  getters: {
    BROWSE_MENU_ITEMS(state) {
      const ids = state.settings.searchDropdownItems;
      // console.log('g:BROWSE_MENU_ITEMS > ', ids);
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
