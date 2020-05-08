<template>
  <div>
    <Breadcrumb></Breadcrumb>
    <div class="main center">
      <NavLeft></NavLeft>
      <div class="main__right">
        <CatalogFilter></CatalogFilter>
        <Sorter></Sorter>
        <ProductBox :qty="qty"></ProductBox>
        <Paging></Paging>
      </div>
    </div>
    <Discount></Discount>
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import Discount from '../components/Discount.vue';
import Paging from '../components/Paging.vue';
import NavLeft from '../components/NavLeft.vue';
import CatalogFilter from '../components/CatalogFilter.vue';
import Sorter from '../components/Sorter.vue';
import ProductBox from '../components/ProductBox.vue';

export default {
  name: 'Catalog',
  // props: ['id', 'subid'],
  watch: {
    // $route(to) {
    //   this.changeCategory(to.params, 'watch');
    // },
  },
  data() {
    return {
      // Quantity of products per page, 9 by default
      qty: 9,
    };
  },
  components: {
    ProductBox,
    Sorter,
    CatalogFilter,
    NavLeft,
    Paging,
    Discount,
    Breadcrumb,
  },
};
</script>

<style lang="sass">
.main
  margin-top: 59px
  display: flex
  justify-content: space-between
  align-items: flex-start
  &__right
    display: flex
    flex-direction: column
    justify-content: flex-start
    width: 848px
</style>
