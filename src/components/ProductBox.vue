<template>
  <section class="product-box product_align center">

    <ProductItem v-for="good in filtered" v-bind:key="good.id" :good="good" />

  </section>
</template>

<script>
import { mapActions } from 'vuex';
import ProductItem from './elements/ProductItem.vue';

export default {
  name: 'ProductBox',
  components: {
    ProductItem,
  },
  props: ['featured', 'qty'],
  data() {
  },
  computed: {
    filtered() {
      const paramObj = {
        qty: this.qty,
        searchString: null,
        sortBy: this.featured ? 'sold' : null,
      };
      return this.$store.getters.Filtered(paramObj);
      // return [{ id: 1, name: 'Man', brand: 1 }, { id: 2, name: 'Woman ', brand: 2 }];
    },
  },
  methods: {
    ...mapActions(['fetchGoods']),
  },
  mounted() {
    this.fetchGoods();
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
