<template>
  <div class="cart__item">
    <router-link to="product"><img src="@/assets/img/cart2_s.png"
                                   alt="cart_item"></router-link>
    <div class="cart__item_desc">
      <h3><router-link to="product">Rebox Zane</router-link></h3>
      <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <i class="far fa-star"></i>
      </div>
      <p>1 x $250</p>
    </div>
    <a href="#"><i class="fas fa-times-circle"></i></a>

  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['item'],
};
</script>

<style scoped lang="sass">

</style>
