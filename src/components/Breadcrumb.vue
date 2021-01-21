<template>
  <div class="breadcrumb center">
    <div class="category">{{ activeCategory.name }}</div>
    <nav>
      <router-link to="/" class="breadcrumb__line" >Home</router-link>
      <BreadcrumbItem v-for="(route, i) in $route.matched" :route="route" v-bind:key="i" />
    </nav>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import BreadcrumbItem from './elements/BreadcrumbItem.vue';

export default {
  name: 'Breadcrumb',
  components: { BreadcrumbItem },
  computed: {
    ...mapGetters(['activeCategory']),
  },
};


</script>

<style lang="sass">
.category
  font-size: 24px
  font-weight: 900
  color: $selectColor
  text-transform: uppercase

.breadcrumb
  display: flex
  justify-content: space-between
  padding-top: 65px
  padding-bottom: 65px
  background-color: #f8f3f4
  color: #636363
  & a:visited
    color: #5e5e5e
  &__line
    font-size: 14px
    font-weight: 300
    text-transform: uppercase
    &:hover
      border-bottom: 1px solid #636363
  &__activ
    font-weight: bold
    color: $selectColor
    text-transform: uppercase
    font-size: 14px


</style>
