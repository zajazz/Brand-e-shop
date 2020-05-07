<template>
  <div id="app">
    <!-- Ошибки -->
    <div v-if="errors.length">{{ errors }}</div>
    <!-- Шапка -->
    <Header ref="Header" />
    <Navigation ref="Navigation"/>
    <!-- /Шапка -->
    <router-view/>

    <!-- Подвал -->
    <Subscribe />
    <Footer />
    <!-- /Подвал -->

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Subscribe from './components/Subscribe.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'Home',
  computed: {
    ...mapState(['errors']),
  },
  components: {
    Header,
    Navigation,
    Subscribe,
    Footer,
  },
  methods: {
    ...mapActions(['fetchCategories', 'fetchGoods']),
  },
  created() {
    this.fetchCategories();
    this.fetchGoods();
  },
};
</script>

<style lang="sass">
/*a
  &.router-link-exact-active
    color: #42b983 */
*
  margin: 0
  padding: 0
  box-sizing: border-box

body
  font-family: 'Lato', sans-serif
  background-color: $bgColor

a
  text-decoration: none
  outline: none
  transition: all .3s

input
  &:active, &:focus
    outline: none

summary::-webkit-details-marker
  display: none

summary::after
  content: '\f0dd'
  padding-right: 6px
  color: #6f6e6e
  font-size: 14px
  font-family: 'FontAwesome'

details[open] > summary::after
  content: '\f0de'
  color: #ef5b70
  font-size: 14px
  font-family: 'FontAwesome'

details[open] > summary
  color: #ef5b70

.center
  padding: 0 calc(50% - 570px)

/* .color defined in _mixins */

.transition
  transition: all 3.3s

.logo
  display: flex
  align-items: center
  margin-right: 37px
  font-size: 27px
  font-weight: 300
  color: #222222
  letter-spacing: 0.03em
  line-height: 32px
  text-transform: uppercase
  &__color
    font-weight: 900
    color: $selectColor
  &__img
    margin-right: 13px
</style>
