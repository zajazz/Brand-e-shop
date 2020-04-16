<template>
  <div class="drop">
    <div class="drop__chapter">
      <h3 class="drop__h3">Women</h3>
      <ul class="drop__ul">
        <li><router-link class="drop__link" to="/catalog">Dresses </router-link></li>
        <li><router-link class="drop__link" to="/catalog">Tops </router-link></li>
        <li><router-link class="drop__link" to="/catalog">Sweaters/Knits </router-link></li>
        <li><router-link class="drop__link" to="/catalog">Jackets/Coats </router-link></li>
        <li><router-link class="drop__link" to="/catalog">Blazers Denim </router-link></li>
        <li><router-link class="drop__link" to="/catalog">Leggings/Pants </router-link></li>
        <li><router-link class="drop__link" to="/catalog">Skirts/Shorts </router-link></li>
        <li><router-link class="drop__link" to="/catalog">Accessories</router-link></li>
      </ul>
    </div>
    <div class="drop__chapter">
      <h3 class="drop__h3">Women</h3>
      <ul class="drop__ul">
        <li><a class="drop__link" href="/product.html">Dresses </a></li>
        <li><a class="drop__link" href="/product.html">Tops </a></li>
        <li><a class="drop__link" href="/product.html">Sweaters/Knits </a></li>
      </ul>
      <h3 class="drop__h3">Women</h3>
      <ul class="drop__ul">
        <li><a class="drop__link" href="/product.html">Dresses </a></li>
        <li><a class="drop__link" href="/product.html">Tops </a></li>
        <li><a class="drop__link" href="/product.html">Sweaters/Knits </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavDrop',
};
</script>

<style lang="sass">
.drop
  background-color: $bgColor
  border-radius: 5px
  padding-left: 20px
  padding-right: 20px
  padding-bottom: 8px
  display: none
  position: absolute
  top: 51px
  border: 1px solid #e8e8e8
  z-index: 100

  &__chapter
    width: 234px
    margin-right: 46px

    &:last-of-type
      margin-right: 0

  &__h3
    font-size: 14px
    color: #232323
    letter-spacing: 0.03em
    text-transform: uppercase
    border-bottom: 1px solid #e8e8e8
    padding-bottom: 8px
    margin-top: 21px

  &__ul
    list-style-type: none

  &__link
    font-size: 14px
    color: #646464
    letter-spacing: 0.03em
    line-height: 28px

    &:hover
      color: $selectColor

</style>
