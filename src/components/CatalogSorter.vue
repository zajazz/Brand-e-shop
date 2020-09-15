<template>
  <div class="sort">
    <div class="sort_item">
      <div class="sort_label">Sort By</div>
      <div class="sort_box">Name
        <i class="fas fa-sort-down sort__point"></i>
        <div class="sort_drop sort_by">
          <ul class="sort_ul">
            <li class="sort_list" @click="sortBy()">Default</li>
            <li class="sort_list" @click="sortBy('name')">Name</li>
            <li class="sort_list" @click="sortBy('price', 'ASC')">Price (asc)</li>
            <li class="sort_list" @click="sortBy('price', 'DESC')">Price (desc)</li>
            <li class="sort_list" @click="sortBy('rating')">Rating</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sort_item">
      <div class="sort_label">Show</div>
      <div class="sort_box">09
        <i class="fas fa-sort-down sort__point"></i>
        <div class="sort_drop sort_pages">
          <ul class="sort_ul">
            <li class="sort_list">10</li>
            <li class="sort_list">30</li>
            <li class="sort_list">50</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogSorter',
};
</script>

<style scoped lang="sass">

.sort
  background-color: #f3f3f3
  height: 50px
  margin-bottom: 48px
  display: flex
  align-items: center
  flex-wrap: wrap
  padding: 10px
  &_item
    background-color: $bgColor
    padding-left: 13px
    margin-right: 10px
    height: 30px
    font-size: 14px
    color: #6f6e6e
    display: flex
    align-items: center
    border: 1px solid #ebebeb
  &_box
    height: 100%
    padding-left: 11px
    display: flex
    align-items: center
    border-left: 1px solid #ebebeb
    position: relative
    &:hover
      cursor: pointer
  &_box:hover &_drop
    display: flex
  &_label
    height: 100%
    display: flex
    align-items: center
    padding-right: 8px
    border-right: 1px solid #ebebeb
  &__point
    padding-left: 21px
    padding-right: 9px
    padding-bottom: 4px
  &_drop
    position: absolute
    top: 28px
    right: -1px
    background-color: $bgColor
    border: 1px solid #eaeaea
    display: none
    padding: 10px
    z-index: 2
  &_ul
    list-style-type: none
    width: 100%
  &_pages
    width: 67px !important
  &_by
    min-width: 100px
  &_list
    font-size: 14px
    color: #646460
    letter-spacing: 0.03em
    line-height: 28px
    &:hover
      color: $selectColor

</style>
