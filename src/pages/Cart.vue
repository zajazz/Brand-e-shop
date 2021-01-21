<template>
<div>
  <Breadcrumb></Breadcrumb>
  <section class="table center">
    <div class="table_caption table_row">
      <div class="table_left">Product Details</div>
      <div class="table_right">
        <span>unite Price</span>
        <span>Quantity</span>
        <span>shipping</span>
        <span>Subtotal</span>
        <span>ACTION</span>
      </div>
    </div>
    <CartRow v-for="cartItem in cart" v-bind:key="cartItem.id" :item="cartItem"/>

    <div v-if="!(cart.length)" class="table_row color">
      <span>Cart is empty. Buy something.</span></div>
    <div class="table_row table_buttons">
      <button v-if="cart.length" class="cart__btn" @click="clearCart()">CLEAR SHOPPING CART</button>
      <button class="cart__btn"><router-link to="/catalog">CONTINUE SHOPPING</router-link></button>
    </div>
    <div v-if="cart.length" class="table_row table_service">
      <div class="service_div">
        <h3>Shipping Address</h3>
        <select class="country" >
          <option value="arg">Argentina</option>
          <option value="aus">Australia</option>
          <option value="aut">Austria</option>
          <option value="bel" selected>Belgium</option>
        </select>
        <input type="text" class="service_input" placeholder="State">
        <input type="text" class="service_input" placeholder="Postcode / Zip">
        <button>get a quote</button>
      </div>
      <div class="service_div">
        <h3>coupon discount</h3>
        <p>Enter your coupon code if you have one</p>
        <input type="text" class="service_input" placeholder="State">
        <button>Apply coupon</button>
      </div>
      <div class="table_total">
        <p>Sub total <span>${{ total }}</span></p>
        <h3>GRAND TOTAL <span class="color">${{ total }}</span></h3>
        <div class="line"></div>
        <router-link to="/checkout"><button>proceed to checkout</button></router-link>
      </div>
    </div>
  </section>

</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Breadcrumb from '../components/Breadcrumb.vue';
import CartRow from '../components/elements/CartRow.vue';

export default {
  name: 'Cart',
  components: {
    CartRow,
    Breadcrumb,
  },
  computed: {
    ...mapState(['cart']),
    img() {
      return `/img/cat/${this.good.id}.png`;
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0).toFixed(2);
    }
  },
  methods: {
    ...mapActions(['deleteJson']),
    clearCart() {
      // TODO modal confirmation
      this.cart.forEach((value) => {
        this.deleteJson(value.id);
      });
    },
  }
};
</script>

<style lang="sass">
.table
  position: relative
  margin-top: 65px
  margin-bottom: 80px
  &_caption
    line-height: 12px
    font-size: 13px
    font-weight: bold
    color: #222222
    letter-spacing: -0.01em
    text-transform: uppercase
  &_buttons
    padding-top: 20px
    border-bottom: none!important
    & button
      cursor: pointer
      height: 50px
      background-color: $bgColor
      border: 1px solid #eaeaea
      padding: 19px 39px
      font-size: 14px
      font-weight: bold
      color: #4a4a4a
      text-transform: uppercase
      +trans(all, .3s)
      &:hover
        background-color: #b2b2b2
      & a
        color: #4a4a4a
  &_service
    margin-top: 38px
    margin-bottom: -45px !important
    display: flex
    flex-wrap: wrap
    border-bottom: none!important
    & h3
      font-size: 16px
      font-weight: bold
      color: $darkColor
      text-transform: uppercase
      padding-bottom: 22px
  &_total
    text-align: right
    height: 214px
    width: 360px
    background-color: #f5f3f3
    padding: 40px 43px
    & p
      font-size: 11px
      color: #4a4a4a
      text-transform: uppercase
      padding-bottom: 14px
      display: block
    & span
      padding-left: 20px
    & button
      height: 50px
      width: 100%
      background-color: $selectColor
      margin-top: 17px
      border: none
      font-size: 16px
      font-weight: bold
      color: $bgColor
      text-transform: uppercase
      cursor: pointer
      &:hover
        background-color: #656565
        border: 1px solid #e2e2e2

.service_div
  flex-grow: 1
  display: flex
  flex-direction: column
  align-items: flex-start
  margin-right: 35px
  & button
    height: 35px
    background-color: $bgColor
    padding: 12px 15px
    border: 1px solid #eaeaea
    font-size: 11px
    font-weight: bold
    color: #4a4a4a
    text-transform: uppercase
    margin-top: 5px
    margin-bottom: 20px
    cursor: pointer
    +trans(all, .3s)
    &:hover
      background-color: #b2b2b2
  & p
    display: block
    padding-bottom: 24px
    font-size: 14px
    font-weight: 300
    color: $darkColor
    text-align: left

.line
  height: 1px
  width: 100%
  background-color: #e2e2e2

.country
  @extend .service_input
  display: block
  position: relative

</style>
