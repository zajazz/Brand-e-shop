import Vue from 'vue';
import { mapActions } from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;


new Vue({
  data() {
    return {
      settings: {
        searchDropdownItems: [
          3, // Woman
          2, // Man
        ],
      },
    };
  },
  router,
  store,
  computed: {
  },
  methods: {
    ...mapActions(['fetchCategories']),
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
    this.fetchCategories();
  },
  render: (h) => h(App),
}).$mount('#app');
