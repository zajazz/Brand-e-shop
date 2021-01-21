<template>
  <div id="app">
    <div v-if="!isInfo" class="project-info-badge" @click="$router.push({ name: 'Info' })">
      Project info
    </div>
    <Header ref="Header" />
    <Navigation ref="Navigation"/>

    <router-view/>

    <Subscribe v-if="!isInfo"/>
    <Footer />

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
    isInfo() {
      return this.$route.name === 'Info';
    }
  },
  watch: {
    $route(to, from) {
      const regExp = /\/catalog*/i;
      // filter products after category was changed
      if (regExp.test(to.path)) {
        this.$store.commit('SET_CURRENT_CAT', to.params);
        this.$store.dispatch('filterProducts');
      // clear filter after exit catalog page
      } else if (regExp.test(from.path)) {
        this.$store.commit('SET_CURRENT_CAT', 0);
        this.$store.dispatch('filterProducts');
      }
    },
  },
  components: {
    Header,
    Navigation,
    Subscribe,
    Footer,
  },
  methods: {
    ...mapActions(['fetchCategories', 'fetchGoods', 'fetchCartData']),
  },
  created() {
    this.fetchCategories();
    this.fetchGoods();
    this.fetchCartData();
  },
};
</script>

<style lang="sass">
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

.project-info-badge
  position: fixed
  height: 80px
  width: 80px
  z-index: 100
  left: 1vw
  top: 40vh
  border-radius: 50%
  background-color: #999999
  padding: 20px 10px
  text-align: center
  vertical-align: middle
  color: #fff
  cursor: pointer
  &:after
    content: ''
    position: absolute
    height: 18px
    width: 18px
    z-index: 100
    left: 65px
    top: 0
    border-radius: 50%
    background-color: #f16d7f
    border: 2px solid #fff
  &:hover
    background-color: #B8B8B8


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

/*! '.color' defined in _mixins */

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
