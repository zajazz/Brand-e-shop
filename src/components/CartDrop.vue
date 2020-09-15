<template>
  <div class="cart">
    <router-link to="cart">
      <img alt="cart" class="header__cart" src="../assets/img/cart_black.svg">
      <!-- Корзина -->
      <div class="cart__drop">
        <div class="cart__items">
          <CartItem v-for="cartItem in cart" v-bind:key="cartItem.id" :item="cartItem"/>
        </div>
        <div class="cart__total">
          <div>TOTAL</div>
          <div>${{ total }}</div>
        </div>
        <router-link class="cart__checkout" to="checkout">Checkout</router-link>
        <router-link class="cart__gtc" to="cart">Go to cart</router-link>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CartItem from './elements/CartItem.vue';

export default {
  name: 'CartDrop',
  components: { CartItem },
  computed: {
    ...mapState(['cart']),
    img() {
      return `/img/cat/${this.good.id}.png`;
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0).toFixed(2);
    }
  },
};
</script>

<style lang="sass">
.cart
  position: relative
  z-index: 1
  &:hover &__drop
    display: flex
  &__items
    //overflow-y: scroll
    width: 100%
    //height: 240px
    display: flex
    align-items: center
    justify-content: flex-start
    flex-direction: column
  &__total
    width: 100%
    display: flex
    justify-content: space-between
    font-size: 16px
    font-weight: bold
    color: #222
    text-transform: uppercase
    margin-top: 19px
  &__checkout
    +cc()
    font-size: 14px
    font-weight: bold
    color: $selectColor
    text-transform: uppercase
    height: 50px
    width: 225px
    background-color: $bgColor
    border: 1px solid $selectColor
    margin-top: 32px
    +trans(all, .3s)
    &:hover
      color: $bgColor
      background-color: $selectColor
  &__gtc
    +cc()
    font-size: 14px
    font-weight: bold
    color: #4a4a4a
    text-transform: uppercase
    height: 50px
    width: 100%
    background-color: $bgColor
    border: 1px solid #eaeaea
    margin-top: 10px
    +trans(all, .3s)
    &:hover
      color: $bgColor
      background-color: #b2b2b2
  &__drop
    position: absolute
    left: -72px
    padding: 20px
    //height: 440px
    width: 262px
    background-color: $bgColor
    border-radius: 5px
    display: none
    flex-direction: column
    align-items: center
    justify-content: space-between
</style>
