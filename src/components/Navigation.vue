<template>
  <nav class="nav center">
    <ul class="menu">
      <li class="menu__list"><a class="menu__link" href="/temlate.html">Home </a>
      </li>
      <li class="menu__list"><a class="menu__link" href="/product.html">Man </a>
        <!--    DROPDOWN MENU  -->
        <div class="drop">
          <div class="drop__chapter">
            <h3 class="drop__h3">Women</h3>
            <ul class="drop__ul">
              <li><a class="drop__link" href="/product.html">Dresses </a></li>
              <li><a class="drop__link" href="/product.html">Tops </a></li>
              <li><a class="drop__link" href="/product.html">Sweaters/Knits </a></li>
              <li><a class="drop__link" href="/product.html">Jackets/Coats </a></li>
              <li><a class="drop__link" href="/product.html">Blazers Denim </a></li>
              <li><a class="drop__link" href="/product.html">Leggings/Pants </a></li>
              <li><a class="drop__link" href="/product.html">Skirts/Shorts </a></li>
              <li><a class="drop__link" href="/product.html">Accessories</a></li>
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
      </li>
      <li class="menu__list"><a class="menu__link" href="/product.html">Women </a></li>
      <li class="menu__list"><a class="menu__link" href="/product.html">Kids </a></li>
      <li class="menu__list"><a class="menu__link" href="/product.html">Accessories </a></li>
      <li class="menu__list"><a class="menu__link" href="/product.html">Featured </a></li>
      <li class="menu__list"><a class="menu__link" href="/product.html">Hot Deals</a>
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

export default {
  name: 'Navigation',
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
  //transition: display 2s
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
