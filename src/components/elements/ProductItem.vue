<template>
  <div class="product">
    <router-link :to="link"><div class="product__img-bg">
      <img :alt="good.name" class="product__img" :src="img"></div>
    </router-link>
    <div class="product__content">
      <router-link :to="link" class="product__title">{{ brand }} {{good.name
        }}</router-link>
      <p class="product__price">${{good.price}}.00</p>
    </div>

    <!-- Add to cart button -->
    <a class="add_to_cart" @click.prevent="selectFeatures()">
      <img alt="cart" class="cart_img" src=  "../../assets/img/cart_wh.svg">
      <span class="atc_text">Add to Cart </span>
    </a>


  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';


export default {
  name: 'ProductItem',
  components: {
  },
  props: ['good'],
  computed: {
    ...mapState(['brands', 'cart']),
    brand() {
      return this.brands.find((item) => item.id === this.good.brand).brand;
    },
    link() {
      return { name: 'Product', params: { id: this.good.id } };
    },
    img() {
      return `/img/cat/${this.good.id}.png`;
    },
  },
  methods: {
    ...mapActions(['addToCart']),
    selectFeatures() {
      // TODO: call for a modal window with order params (size, color, etc.)
      this.addToCart({ good: this.good, qty: 1 });
      this.$parent.showPopup(0.5);
    },
  },
};
</script>

<style lang="sass">
.product
  width: 261px
  position: relative
  margin-bottom: 20px
  transition: all $transition
  &__img
    max-width: 100%
    max-height: 100%
    transition: all .4s
    &-bg
      background: #eaeaea
      height: 280px
      +cc
      +trans(all, .4)

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
      &-bg
        filter: brightness(50%)
    & .alsolike_img
      filter: brightness(50%)
    & .add_to_cart
      opacity: 1
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.16)
    transform: scale(1.03)
  &_align .product
    margin-right: 30px
    /* .product_align defined in ProductBox */

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
    cursor: pointer

.atc_text
  font-size: 13px
  font-weight: bold
  color: #fff
  padding-left: 8px
</style>
