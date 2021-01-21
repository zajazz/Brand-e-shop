<template>
  <div class="paging">
    <div class="pages">
      <span class="number"><i class="fas fa-angle-left"></i></span>
      <span class="number color">1</span>
      <a href="#" class="number">2</a>
      <a href="#" class="number">3</a>
      <a href="#" class="number">4</a>
      <a href="#" class="number">5</a>
      <a href="#" class="number">6</a>
      <span class="number">.....</span>
      <a href="#" class="number">20</a>
      <a href="#" class="number"><i class="fas fa-angle-right"></i></a>
    </div>
    <router-link :to="{name: 'Catalog'}" class="viewall">View All</router-link>
  </div>
</template>

<script>
export default {
  name: 'Paging',
};
</script>

<style lang="sass">

.paging
  display: flex
  justify-content: space-between
  align-items: center
  height: 44px
  margin-bottom: 110px

.pages
  background-color: $bgColor
  border: 1px solid #ebebeb
  border-radius: 3px
  height: 44px
  display: flex
  align-items: center
  padding-right: 15px

.number
  font-size: 16px
  font-weight: 400
  color: #c4c4c4
  padding-left: 15px

a.number:hover
  color: #ef5b70

.viewall
  display: flex
  align-items: center
  justify-content: center
  height: 44px
  width: 150px
  background-color: $bgColor
  border: 1px solid #ef5b70
  border-radius: 3px
  font-size: 16px
  font-weight: 400
  color: #ef5b70
  transition: all .5s

  &:hover
    background-color: #ef5b70
    color: $bgColor


</style>
