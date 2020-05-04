<template>
  <nav class="nav center">
{{    MENU_ITEMS }}
    <ul class="menu">
      <li class="menu__list"  v-for="menuItem of MENU_ITEMS" :key="menuItem.id">
        <router-link class="menu__link" :to="link(menuItem.id)">{{ menuItem.name }}</router-link>
        <NavDrop v-if="menuItem.subcategories.length"
                 :category="menuItem" :subs="getSubcat(menuItem.subcategories)"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NavDrop from './elements/NavDrop.vue';


export default {
  name: 'Navigation',
  components: {
    NavDrop,
  },
  data() {
    return {
      subCategories: null,
    };
  },
  methods: {
    ...mapActions(['fetchCategories']),
    link(id) {
      return id === 1 ? '/' : `/catalog/${id}`;
    },
    getSubcat(ids) {
      return this.subCategories.filter((item) => ids.includes(item.id));
    },
  },
  computed: {
    ...mapGetters(['MENU_ITEMS', 'PropsList']),
  },
  mounted() {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_actions"] }] */
    // eslint-disable-line no-underscore-dangle
    this.fetchCategories();
  },
};
</script>

<style lang="sass">
.nav
  height: 51px
  background-color: $bgColor

.menu
  list-style-type: none
  display: flex
  justify-content: center
  height: 51px

  &__link
    font-size: 14px
    font-weight: bold
    color: #222222
    text-align: left
    text-transform: uppercase
    display: block
    padding: 20px

  &__list:hover
    border-bottom: 3px solid $selectColor

    & .drop
      display: flex

  &__list
    position: relative


</style>
