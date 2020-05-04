import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;


new Vue({
  data() {
    return {
      goods: [],
      cart: [],
      menuItems: [],
      subcategories: [],
      brands: [],
      designers: [],
      colors: [],
      sizes: [],
      materials: [],
    };
  },
  router,
  store,
  computed: {
  },
  methods: {
    makeRequest(url, method = 'GET', data = null) {
      const headers = {};
      let body;
      if (data) {
        // если передаём данные, то это json
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(data);
      }
      return fetch(url, { method, headers, body })
        .then((result) => result.json())
        .catch((error) => {
          // TODO: компонент ошибок
          // this.$refs.error.setError(error);
          console.log(error);
        });
    },
  },
  mounted() {
    this.makeRequest('/api/goods')
      .then((data) => {
        data.forEach((el) => this.goods.push(el));
      });
    this.$root.makeRequest('/api/categories')
      .then((data) => {
        this.menuItems = data.menuItems.slice();
        this.subcategories = data.subcategories.slice();
        this.brands = data.brands.slice();
        this.designers = data.designers.slice();
        this.colors = data.colors.slice();
        this.sizes = data.sizes.slice();
        this.materials = data.materials.slice();
      });
  },
  render: (h) => h(App),
}).$mount('#app');
