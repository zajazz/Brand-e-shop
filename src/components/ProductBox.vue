<template>
  <section class="product-box product_align center">
    <Popup ref="popup">Item added to cart</Popup>
    <ProductItem v-for="good in productList" v-bind:key="good.id" :good="good" />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Popup from '@/components/popup/Popup.vue';
import ProductItem from '@/components/elements/ProductItem.vue';

export default {
  name: 'ProductBox',
  components: {
    ProductItem,
    Popup,
  },
  props: ['sortBy', 'qty', 'order'],
  computed: {
    ...mapState(['filtered']),
    productList() {
      return this.qty ? this.filtered.slice(0, this.qty) : this.filtered;
    },
  },
  methods: {
    ...mapActions(['sortProducts']),
    showPopup(time) {
      this.$refs.popup.showPopup(time);
    },
  },
  created() {
    if (this.sortBy) {
      this.sortProducts({
        sortBy: this.sortBy,
        order: this.order,
      });
    }
  },
};
</script>

<style lang="sass">
.product
  &-box
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-content: flex-start
  &_align
    justify-content: flex-start !important
    margin-right: -35px

</style>
