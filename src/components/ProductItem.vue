<template>
  <div class="product">
    <router-link to="product/:id">
      <img alt="item" class="product__img" src=  "../assets/img/cat/1.png">
    </router-link>
    <div class="product__content">
      <router-link to="product/:id" class="product__title">Mango People T-shirt</router-link>
      <p class="product__price">$52.00</p>
    </div>
    <!-- Кнопка Add to cart -->
    <a class="add_to_cart" href="#">
      <img alt="cart" class="cart_img" src=  "../assets/img/cart_wh.svg">
      <span class="atc_text">Add to Cart</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Item',
};
</script>

<style lang="sass">
.product
  width: 261px
  position: relative
  margin-bottom: 20px
  transition: all $transition
  &__img
    width: 100%
    transition: all .4s
  &__title
    font-size: 14px
    color: #222
    text-transform: uppercase
    font-weight: bold
  &__price
    font-size: 16px
    font-weight: bold
    color: $selectColor
    text-transform: uppercase
    margin-top: 17px
  &__content
    padding: 19px 15px
  &:hover
    & .product__img
      filter: brightness(50%)
    & .alsolike_img
      filter: brightness(50%)
    & .add_to_cart
      opacity: 1
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.16)
    transform: scale(1.03)
  &_align
    justify-content: flex-start !important
    margin-right: -35px
    & .product
      margin-right: 30px

.cart_img
  height: 22px
  width: 23px
  margin-left: 12px

.add_to_cart
  position: absolute
  top: 97px
  left: 70px
  height: 39px
  width: 123px
  border: 1.5px solid #fff
  display: flex
  align-items: center
  justify-content: flex-start
  opacity: 0
  transition: all $transition
  &:hover
    box-shadow: 0 0 5px #fff

.atc_text
  font-size: 13px
  font-weight: bold
  color: #fff
  padding-left: 8px
</style>
