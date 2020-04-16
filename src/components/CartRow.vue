<template>
  <div class="table_row">
    <div class="table_left">
      <router-link to="/product">
        <img src="../assets/img/cat/cart1.png" alt="Mango People T-shirt" class="table_img">
      </router-link>
      <div class="table_desc">
        <h3><router-link to="/product">Mango People T-shirt</router-link></h3>
        <div class="table_product_specs">
          <p><b>Color:</b> Red</p>
          <p><b>Size:</b> XXL</p>
        </div>
      </div>
    </div>
    <div class="table_right table_spec">
      <span>150$</span>
      <span><input type="number" required min="1" value="2"></span>
      <span>FREE</span>
      <span>300$</span>
      <span><i class="fas fa-times-circle"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartRow',
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
