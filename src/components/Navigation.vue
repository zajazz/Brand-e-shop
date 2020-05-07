<template>
  <nav class="nav center">
    <ul class="menu">
      <li class="menu__list" v-for="menuItem of menuItems" v-bind:key="menuItem.id">
        <router-link class="menu__link" :to="link(menuItem.id)">{{ menuItem.name }}</router-link>
        <NavDrop v-if="menuItem.subcategories.length"
                 :category="menuItem" :subs="SubcatList(menuItem.subcategories)"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import NavDrop from './elements/NavDrop.vue';


export default {
  name: 'Navigation',
  components: {
    NavDrop,
  },
  methods: {
    link(id) {
      return id === 1 ? '/' : `/catalog/${id}`;
    },
    SubcatList(ids) {
      return this.PROPS_LIST('subcategories', ids);
    },
  },
  computed: {
    ...mapGetters(['PROPS_LIST']),
    ...mapState(['menuItems']),
  },
  mounted() {
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
