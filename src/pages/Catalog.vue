<template>
  <div>
    <Breadcrumb></Breadcrumb>
    <div class="main center">
      <NavLeft></NavLeft>
      <div class="main__right">
        <CatalogFilter></CatalogFilter>
        <CatalogSorter></CatalogSorter>
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
import CatalogSorter from '../components/CatalogSorter.vue';
import ProductBox from '../components/ProductBox.vue';

export default {
  name: 'Catalog',
  data() {
    return {
      qty: 9, // products per page
    };
  },
  components: {
    ProductBox,
    CatalogSorter,
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
