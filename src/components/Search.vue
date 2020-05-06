<template>
  <form action="#" class="header__form" @submit.prevent="search()">
    <div class="browse">
      <a class="browse__text" href="#">Browse</a>
      <i class="fas fa-sort-down browse__point"></i>
      <!-- Выпадающее меню -->
      <div class="drop browse_drop">
        <div class="drop__chapter">
          {{ searchDropItemsList }}
<!--          <span v-for="item of searchDropItemsList" v-bind:key="item.id">-->
<!--            <router-link :to="link(item.id)" tag="h3" class="drop__h3">-->
<!--                  {{ item.name }}-->
<!--            </router-link>-->
<!--          <ul class="drop__ul">-->
<!--            <li v-for="subitem of subcatList(item.subcategories)" :key="subitem.id">-->
<!--              <router-link :to="link(item.id, subitem.id)" class="drop__link" href="#">-->
<!--              {{ subitem.name }} </router-link>-->
<!--            </li>-->
<!--          </ul>-->
<!--          </span>-->
        </div>
      </div>
    </div>
    <input class="header__input" placeholder="Search for Item..."
           type="text" v-model="searchSrting">
    <button class="header__search" @submit.prevent="search()">
      <img alt="search" src="../assets/img/search.png">
    </button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      searchSrting: '',
      menuItems: this.MENU_ITEMS,
      ids: this.$root.settings.searchDropdownItems,
    };
  },
  computed: {
    ...mapGetters(['MENU_ITEMS', 'PropsList']),

    searchDropItemsList() {
      const newArr = this.MENU_ITEMS;
      console.log(newArr);
      // return this.MENU_ITEMS.filter((item) => this.ids.includes(item.id));
      // return this.PropsList('menuItems', this.dropItemsIds, 'search49');
      return [{ id: 1, name: 'Man' }, { id: 2, name: 'Woman ' }];
    },
  },
  methods: {
    search() {
      console.log(this.searchSrting);
      // Filtered: (state) => ({ qty, searchString, sortBy })
    },
    subcatList(ids) {
      return this.$store.getters.PropsList('subcategories', ids, 'search52');
    },
    link(id, subId) {
      const subIdStr = subId ? `/${subId}` : '';
      return { path: `/catalog/${id}${subIdStr}` };
    },
  },
  mounted() {
  },
};
</script>

<style scoped lang="sass">
.header__form
  display: flex
  align-items: center
</style>
