<template>
  <aside class="main__left">
    <details class="leftmenu_block" open>
      <summary class="leftmenu_cat">Category</summary>
      <p><a class="leftmenu__item" href="/product.html">Accessories</a></p>
      <p><a class="leftmenu__item" href="/product.html">Bags</a></p>
      <p><a class="leftmenu__item" href="/product.html">Denim</a></p>
      <p><a class="leftmenu__item" href="/product.html">Hoodies & Sweatshirts</a></p>
      <p><a class="leftmenu__item" href="/product.html">Jackets & Coats</a></p>
      <p><a class="leftmenu__item" href="/product.html">Pants</a></p>
      <p><a class="leftmenu__item" href="/product.html">Polos</a></p>
      <p><a class="leftmenu__item" href="/product.html">Shirts</a></p>
      <p><a class="leftmenu__item" href="/product.html">Shoes</a></p>
      <p><a class="leftmenu__item" href="/product.html">Shorts</a></p>
      <p><a class="leftmenu__item" href="/product.html">Sweaters & Knits</a></p>
      <p><a class="leftmenu__item" href="/product.html">T-Shirts</a></p>
      <p><a class="leftmenu__item" href="/product.html">Tanks</a></p>
    </details>
    <details class="leftmenu_block">
      <summary class="leftmenu_cat">Brand</summary>
      <p><a class="leftmenu__item" href="/product.html">Mango</a></p>
      <p><a class="leftmenu__item" href="/product.html">Mango</a></p>
      <p><a class="leftmenu__item" href="/product.html">Mango</a></p>
    </details>
    <details class="leftmenu_block">
      <summary class="leftmenu_cat">Designer</summary>
      <p><a class="leftmenu__item" href="/product.html">Mango</a></p>
      <p><a class="leftmenu__item" href="/product.html">Mango</a></p>
      <p><a class="leftmenu__item" href="/product.html">Mango</a></p>
    </details>
  </aside>
</template>

<script>
export default {
  name: 'NavLeft',
};
</script>

<style scoped lang="sass">
/* .main__left not defined */
/* summary & details defined in App.vue */
.leftmenu
  &__item
    font-size: 14px
    color: #6f6e6e
    line-height: 33px
    padding-left: 17px
  &__item:hover
    color: $selectColor
  &_cat
    font-size: 14px
    font-weight: bold
    color: #6f6e6e
    text-transform: uppercase
    display: flex
    justify-content: space-between
    border-left: 5px solid $selectColor
    padding-top: 12px
    padding-bottom: 15px
    padding-left: 11px
    width: 243px
    cursor: pointer
  &_block
    margin-bottom: 40px
    color: #6f6e6e

</style>
