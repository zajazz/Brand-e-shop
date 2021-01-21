<template>
  <aside class="main__left">
    <details class="leftmenu_block" open>
      <summary class="leftmenu_cat">Category</summary>
      <p v-for="subcategory of subcategories" v-bind:key="subcategory.id"
         @click="changeSubcategory(subcategory.id)">
        <a class="leftmenu__item" href="#" @click.prevent>{{ subcategory.name }}</a></p>

      <!--       <router-link class="" :to="link"></router-link>-->
    </details>

    <details class="leftmenu_block">
      <summary class="leftmenu_cat">Brand</summary>
      <p v-for="brand of brands" v-bind:key="brand.id"
         @click="changeBrand(brand.id)">
        <a class="leftmenu__item" href="#" @click.prevent>{{ brand.brand }}</a></p>
    </details>

    <details class="leftmenu_block">
      <summary class="leftmenu_cat">Designer</summary>
      <p v-for="designer of designers" v-bind:key="designer.id"
         @click="changeDesigner(designer.id)">
        <a class="leftmenu__item" href="#" @click.prevent>{{ designer.name }}</a></p>
    </details>
  </aside>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'NavLeft',
  methods: {
    ...mapMutations(['SET_CURRENT_CAT']),
    ...mapActions(['filterProducts']),
    changeSubcategory(subId) {
      this.setSubcategory(subId);
      this.filterProducts();
    },
    changeBrand(id) {
      this.filterProducts({brand: id});
    },
    changeDesigner(id) {
      this.filterProducts({designer: id});
    },
    setSubcategory(subId) {
      let catId = this.currentCat[0];
      this.SET_CURRENT_CAT({
        id: catId,
        subid: subId,
      });
    },
  },
  computed: {
    ...mapState(['subcategories', 'currentCat', 'brands', 'designers']),
  },
};
</script>

<style lang="sass">
/* summary & details defined in App.vue */
.leftmenu
  &__item
    font-size: 14px
    color: #6f6e6e
    line-height: 33px
    padding-left: 17px
  &__item:hover
    color: $selectColor
  &_cat
    font-size: 14px
    font-weight: bold
    color: #6f6e6e
    text-transform: uppercase
    display: flex
    justify-content: space-between
    border-left: 5px solid $selectColor
    padding-top: 12px
    padding-bottom: 15px
    padding-left: 11px
    width: 243px
    cursor: pointer
  &_block
    margin-bottom: 40px
    color: #6f6e6e

</style>
