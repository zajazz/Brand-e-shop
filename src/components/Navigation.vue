<template>
  <nav class="nav center">
    <ul class="menu">
      <li class="menu__list"><router-link class="menu__link" to="/">Home </router-link>
      </li>
      <li class="menu__list"><a class="menu__link" href="/product.html">Man </a>
        <!--    DROPDOWN MENU  -->
        <NavDrop></NavDrop>
      </li>
      <li class="menu__list">
        <router-link class="menu__link" to="/catalog/:id">Women </router-link></li>
      <li class="menu__list">
        <router-link class="menu__link" to="/catalog/:id">Kids </router-link></li>
      <li class="menu__list">
        <router-link class="menu__link" to="/catalog/:id">Accessories </router-link></li>
      <li class="menu__list">
        <router-link class="menu__link" to="/catalog/:id">Featured </router-link></li>
      <li class="menu__list">
        <router-link class="menu__link" to="/catalog/:id">Hot Deals</router-link>
        <!--    DROPDOWN MENU  -->
        <div class="drop drop_last">
          <div class="drop__chapter">
            <h3 class="drop__h3">Accessories</h3>
            <ul class="drop__ul">
              <li><a class="drop__link" href="/product.html">Dresses </a></li>
              <li><a class="drop__link" href="/product.html">Tops </a></li>
              <li><a class="drop__link" href="/product.html">Sweaters/Knits </a></li>
            </ul>
            <h3 class="drop__h3">Accessories</h3>
            <ul class="drop__ul">
              <li><a class="drop__link" href="/product.html">Dresses </a></li>
              <li><a class="drop__link" href="/product.html">Tops </a></li>
              <li><a class="drop__link" href="/product.html">Sweaters/Knits </a></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavDrop from './NavDrop.vue';

export default {
  name: 'Navigation',
  components: {
    NavDrop,
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
