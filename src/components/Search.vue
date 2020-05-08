<template>
  <form action="#" class="header__form" @submit.prevent="search()">
    <div class="browse">
      <a class="browse__text" href="#">Browse</a>
      <i class="fas fa-sort-down browse__point"></i>
      <!-- Выпадающее меню -->
      <div class="drop browse_drop">
        <div class="drop__chapter">
          <span v-for="item of BROWSE_MENU_ITEMS" v-bind:key="item.id">
            <router-link :to="link(item.id)" tag="h3" class="drop__h3">
                  {{ item.name }}
            </router-link>
          <ul class="drop__ul">
            <li v-for="subitem of subcatList(item.subcategories)" :key="subitem.id">
              <router-link :to="link(item.id, subitem.id)" class="drop__link" href="#">
              {{ subitem.name }}
              </router-link>
            </li>
          </ul>
          </span>
        </div>
      </div>
    </div>
    <input class="header__input" placeholder="Search for Item..."
           type="text" v-model.lazy="searchSrting">
    <button class="header__search" @submit.prevent="search()">
      <img alt="search" src="../assets/img/search.png">
    </button>
  </form>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';


export default {
  name: 'Search',
  data() {
    return {
      searchSrting: 'people',
    };
  },
  computed: {
    ...mapState(['menuItems']),
    ...mapGetters(['BROWSE_MENU_ITEMS', 'PROPS_LIST']),
  },
  methods: {
    ...mapActions(['filterProducts']),
    search() {
      this.$store.commit('SET_SEARCH_STRING', this.$_.escape(this.searchSrting.trim()));
      this.filterProducts();
    },
    subcatList(ids) {
      return this.PROPS_LIST('subcategories', ids);
    },
    link(catId, subId) {
      let sid = '';
      if (subId) sid = subId;
      return `/catalog/${catId}/${sid}`;
      // const subIdStr = subId ? `/${subId}` : '';
      // return { path: `/catalog/${id}${subIdStr}` };
      // return { name: 'Catalog', params: { id: catId, subid: sid } };
    },
  },
  updated() {
    console.log('----->', this.$store.state);
  },
};
</script>

<style scoped lang="sass">
.header__form
  display: flex
  align-items: center
</style>
