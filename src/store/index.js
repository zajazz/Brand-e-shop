import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'underscore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: {
      /** select menu items for dropdown list near the search in the header */
      searchDropdownItems: [
        3, // Woman
        2, // Man
      ],
    },
    goods: [],
    menuItems: [],
    subcategories: [],
    brands: [],
    designers: [],
    materials: [],
    filtered: [],
    errors: [],
    /**
     * currentCat[0] - category number
     * currentCat[1] - subcategory
     */
    currentCat: [],
    searchString: '',
    cart: [],
    tmp: [],
  },
  mutations: {
    SET_CART_DATA(state, data) {
      state.cart = [...data];
    },
    ADD_TO_CART(state, data) {
      state.cart.push(data);
    },
    /** @params {Object} data - { url, id, quantity } */
    UPDATE_CART_DATA(state, data) {
      const idx = state.cart.findIndex((el) => el.id === data.id);
      state.cart[idx].quantity = data.quantity;
    },
    DELETE_FROM_CART(state, id) {
      const idx = state.cart.findIndex((el) => el.id === id);
      state.cart.splice(idx, 1);
    },
    SET_CATEGORIES(state, data) {
      state.menuItems = [...data.menuItems];
      state.subcategories = [...data.subcategories];
      state.brands = [...data.brands];
      state.designers = [...data.designers];
      state.materials = [...data.materials];
    },
    SET_GOODS(state, data) {
      state.goods = [...data];
      state.filtered = [...data];
    },
    SET_ERROR(state, err) {
      state.errors.push(err);
    },
    /**
     * Set current category & subcategory state
     * @param {Object} params - params.id, params.subid
     */
    SET_CURRENT_CAT(state, params) {
      Vue.set(state.currentCat, 0, params.id ? +params.id : 0);
      Vue.set(state.currentCat, 1, params.subid ? +params.subid : 0);
    },
    SET_SEARCH_STRING(state, value) {
      state.searchString = value.trim();
    },
    SET_FILTERED(state, data) {
      state.filtered = [...data];
    },
  },
  actions: {
    putJson({commit}, dataObj) {
      fetch(`/api/cart/${dataObj.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({quantity: dataObj.quantity})
      })
        .then((result) => result.json())
        .then((data) => {
          if (data.result === 1) {
            commit('UPDATE_CART_DATA', dataObj);
          }
        })
        .catch((error) => {
          commit('SET_ERROR', {putJson: error.message});
        });
    },
    postJson({commit}, dataObj) {
      return fetch(dataObj.url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataObj.prod)
      }).then((result) => result.json())
        .then((data) => {
          if (data.result === 1) {
            commit('ADD_TO_CART', dataObj.prod);
          }
        })
        .catch((error) => {
          commit('SET_ERROR', {postJson: error});
        });
    },
    deleteJson({commit}, itemId) {
      fetch(`/api/cart/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((result) => result.json())
        .then((data) => {
          if (data.result === 1) {
            commit('DELETE_FROM_CART', itemId);
          }
        })
        .catch((error) => {
          commit('SET_ERROR', {deleteJson: error});
        });
    },

    fetchCategories({ commit }) {
      fetch('/api/categories')
        .then((result) => result.json())
        .then((data) => {
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
          commit('SET_GOODS', data);
        })
        .catch((error) => {
          commit('SET_ERROR', { fetchGoods: error.message });
        });
    },
    fetchCartData({commit}) {
      fetch('/api/cart')
        .then((result) => result.json())
        .then((data) => {
          commit('SET_CART_DATA', data);
        })
        .catch((error) => {
          commit('SET_ERROR', {fetchCartData: error.message});
        });
    },

    /**
     * Filters product list due to params: currentCat, searchString - by default,
     * and price range - if defined.
     * @param {Object} params - additional filter params such as
     *    * {int} brandId, {int} designerId,
     *    * {array} priceRange where [0]-min & [1]-max price value
     */
    filterProducts({ commit, state }, params = {}) {

      if (!state.goods.length) {
        commit('SET_ERROR', {filterProducts: 'Nothing to filter.'});
      }

      let filtered = state.goods.slice();

      // filter by catalog & subcatalog
      if (state.currentCat.length || state.currentCat[0]) {
        const catId = state.currentCat[0];
        const subcatId = state.currentCat[1];
        if (catId) filtered = filtered.filter((el) => el.category === catId);
        if (subcatId) filtered = filtered.filter((el) => el.subcategory === subcatId);
      }

      // filter by brand
      if (params.brand) {
        filtered = filtered.filter((el) => el.brand === params.brand);
      }

      // filter by designer
      if (params.designer) {
        filtered = filtered.filter((el) => el.designer === params.designer);
      }

      // filter by search string
      if (state.searchString) {
        const regexp = new RegExp(state.searchString, 'i');
        filtered = filtered.filter((el) => {
          let brandName = state.brands.find((brand) => brand.id === el.brand).brand;
          return regexp.test(el.name) || regexp.test(brandName);
        });
      }

      // filter by price range
      if (params.priceRange) {
        filtered = filtered.filter(
          (el) => (el.price >= params.priceRange[0] && el.price <= params.priceRange[1])
        );
      }

      commit('SET_FILTERED', filtered);
    },
    /**
     * Sort list of filtered products
     * @param commit
     * @param state
     * @param {string} sortBy - number-typed fields like 'price', 'sold', 'rating'
     * @param {string} order - 'ASC' or 'DESC'
     */
    sortProducts({ commit, state }, { sortBy, order }) {

      if (!state.filtered) this.filterProducts([]);

      let filtered = state.filtered.slice();

      if (!(sortBy in filtered[0])) return;

      if (order === 'DESC') {
        filtered = filtered.sort((a, b) => b[sortBy] - a[sortBy]);
      } else {
        filtered = filtered.sort((a, b) => a[sortBy] - b[sortBy]);
      }

      commit('SET_FILTERED', filtered);
    },
    addToCart({ dispatch, state }, { good, qty = 1 }) {
      const find = state.cart.find((el) => el.id === good.id);
      if (find) {
        const quantity = find.quantity + qty;
        dispatch('putJson', { url: '/api/cart', id: find.id, quantity });
      } else {
        let prod = {
          id: good.id,
          name: good.name,
          brand: good.brand,
          color: null,
          size: null,
          price: good.price,
          shipping: null,
          rating: good.rating,
          quantity: qty,
        };
        dispatch('postJson', {url: '/api/cart', prod});
      }
    },
  },
  getters: {
    BROWSE_MENU_ITEMS(state) {
      const ids = state.settings.searchDropdownItems;
      return state.menuItems.filter((item) => ids.includes(item.id));
    },
    /**
     * Method returns array of good's properties, such as colors, sizes and materials
     * @return {*} - array of elements filtered by indexes
     */
    // eslint-disable-next-line func-names
    PROPS_LIST: (state) => function (type, ids) {
      return state[type].filter((el) => ids.includes(el.id));
    },
    // eslint-disable-next-line func-names
    PropertyById: (state) => function (prop, id) {
      return state[prop].find((el) => el.id === +id);
    },
    activeCategory({ menuItems, currentCat }) {
      return menuItems.find((el) => el.id === currentCat[0]) ?? {name: ''};
    },
    activeSubCategory({ subcategories, currentCat }) {
      return subcategories.find((el) => el.id === currentCat[1]);
    },
    productById: ({ goods }) => (id) => goods.find((el) => el.id === +id),
  },
});
