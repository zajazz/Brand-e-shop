<template>
  <div class="table_row">
    <div class="table_left">
      <router-link :to="link">
        <img :src="img" :alt="item.name" class="table_img">
      </router-link>
      <div class="table_desc">
        <h3><router-link :to="link">{{ item.name }}</router-link></h3>
        <div class="table_product_specs">
          <p><b>Color: </b>{{ item.color }}</p>
          <p><b>Size: </b>{{ item.size }}</p>
        </div>
      </div>
    </div>
    <div class="table_right table_spec">
      <span>{{ item.price }}$</span>
      <span>
        <input type="number" required min="1" :value="item.quantity"
               @change="changeQty($event, item)">
      </span>
      <span>{{ item.shipping || 'FREE'}}</span>
      <span>{{ item.price * item.quantity }}$</span>
      <span><a @click.prevent="remove()"><i class="fas fa-times-circle"></i></a></span>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'CartRow',
  props: ['item'],
  computed: {
    link() {
      return { name: 'Product', params: { id: this.item.id } };
    },
    img() {
      return `/img/cat/${this.item.id}.png`;
    },
  },
  methods: {
    ...mapActions(['putJson', 'deleteJson']),
    remove() {
      this.deleteJson(this.item.id);
    },
    changeQty($event, item) {
      this.putJson({ url: '/api/cart', id: item.id, quantity: $event.target.value });
    }
  },
};
</script>

<style lang="sass">
.table
  &_row
    border-bottom: 1px solid #eaeaea
    display: flex
    justify-content: space-between
    margin: 25px 0
    padding-bottom: 25px
  &_left
    display: flex
    justify-content: flex-start
    align-items: center
    flex-basis: 42%
  &_right
    display: flex
    justify-content: space-between
    align-items: center
    flex-grow: 1
    & span
      position: relative
      padding-left: 10px
      display: flex
      justify-content: center
      flex-grow: 1
      flex-basis: 100px
  &_img
    padding-right: 20px
    max-height: 115px
    max-width: 100px
  &_desc
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-between
    padding-bottom: 20px
    & h3, a
      padding-top: 9px
      font-size: 13px
      color: #222222
      text-transform: uppercase
      &:hover
        @extend .color
  &_product_specs
    font-size: 13px
    font-weight: 300
    color: #6f6e6e
    & b
      color: #575757
      font-weight: normal
  &_spec
    font-size: 13px
    color: #656565
    & i
      color: #c0c0c0
      cursor: pointer
      +trans(color, .3s)
      &:hover
        color: #656565
        transform: scale(1.2)
    & input
      position: relative
      left: 15px
      margin-left: -30px
      height: 30px
      width: 54px
      background-color: $bgColor
      border: 1px solid #eaeaea
      padding: 10px
      text-align: center
      @extend .table_spec
</style>
