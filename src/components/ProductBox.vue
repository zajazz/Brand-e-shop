<template>
  <section class="product-box product_align center">

    <ProductItem v-for="good in goods" v-bind:key="good.id" :good="good" />
  </section>
</template>

<script>
import ProductItem from './elements/ProductItem.vue';

/**
 * @property {Number} rowsCount - число строк в выводе списка товаров,
 * по умолчанию – 3
 */
export default {
  name: 'ProductBox',
  props: ['featured', 'qty'],
  data() {
    return {
      goods: [],
      // filtered: this.$root.$ref.Search.filtered,
      filtered: this.$root,
    };
  },
  computed: {
  },
  methods: {
    // temp() {
    //   console.log(this.filtered);
    // },
  },
  components: {
    ProductItem,
  },
  mounted() {
    this.$root.makeRequest('/api/goods')
      .then((data) => {
        data.forEach((el) => this.goods.push(el));
        // For some blocks like "YOU MAY LIKE ALSO" we need only one-line display (4 goods)
        // So, sort items by sold field and take 4 best sales
        // TODO: one-line block is object to remake styles to fit in small screens
        if (this.featured) {
          this.goods = this.goods.sort((a, b) => b.sold - a.sold).slice();
        }
        if (this.qty) {
          this.goods = this.goods.slice(0, this.qty);
        }
      });
  },
  updated() {
    console.log(this.filtered);
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
