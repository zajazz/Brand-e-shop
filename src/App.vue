<template>
  <div id="app">
    <!-- Шапка -->
    <Header></Header>
    <Navigation></Navigation>
    <!-- /Шапка -->
    <router-view/>

    <!-- Подвал -->
    <Subscribe></Subscribe>
    <Footer></Footer>
    <!-- /Подвал -->

   <!--     cсылки
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>     -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Subscribe from './components/Subscribe.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Navigation,
    Subscribe,
    Footer,
  },
};
</script>

<style lang="sass">
/*a
  &.router-link-exact-active
    color: #42b983*/
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
