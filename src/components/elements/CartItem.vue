<template>
  <div class="cart__item">
    <router-link :to="link">
<!--      <img src="@/assets/img/cart2_s.png" alt="cart_item">-->
      <img :src="img" :alt="item.name">
    </router-link>
    <div class="cart__item_desc">
      <h3><router-link :to="link">{{ item.name }}</router-link></h3>
      <div class="stars">
        <i v-for="(star, index) in stars" :class="star" v-bind:key="index"></i>
      </div>
      <p>{{ item.quantity }} x ${{ item.price }}</p>
    </div>
    <a @click.prevent="remove()"><i class="fas fa-times-circle"></i></a>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CartItem',
  props: ['item'],
  computed: {
    link() {
      return { name: 'Product', params: { id: this.item.id } };
    },
    img() {
      return `/img/cat/${this.item.id}.png`;
    },
    stars() {
      let html = [];
      let rate = this.item.rating;
      for (let i = 0; i < 5; i += 1) {
        if (i < parseInt(rate, 10)) {
          html.push('fas fa-star');
        } else if (i === parseInt(rate, 10) && (rate % 1 > 0)) {
          html.push('fas fa-star-half-alt');
        } else {
          html.push('far fa-star');
        }
      }
      return html;
    },
  },
  methods: {
    ...mapActions(['putJson', 'deleteJson']),
    remove() {
      const qty = this.item.quantity - 1;
      if (qty) {
        this.putJson({ url: '/api/cart', id: this.item.id, quantity: qty });
      } else {
        this.deleteJson(this.item.id);
      }
    },
  },
};
</script>

<style lang="sass">
.cart
  &__item
    display: flex
    justify-content: flex-start
    width: 100%
    padding-bottom: 16px
    margin-bottom: 16px
    border-bottom: 1px solid rgba(237, 237, 237, 0.75)
    &:hover
      box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.1)
    & i, a
      font-size: 16px
      color: #c0c0c0
      align-self: center
      padding: 0
      +trans(color, .3s)
    & i:hover
      color: #656565
      transform: scale(1.2)
    & img
      margin-right: 14px
      max-height: 85px
      max-width: 72px
    &_desc
      width: 115px
      display: flex
      flex-direction: column
      justify-content: flex-start
      padding-right: 14px
      & i
        font-size: 12px
        color: #e4af48
        padding: 0
      & p
        font-size: 12px
        color: $selectColor
      & h3 a
        font-size: 12px
        font-weight: bold
        color: $darkColor
        text-align: left
        text-transform: uppercase
</style>
