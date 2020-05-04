<template>
  <section class="bottom_discount center">
    <article class="discount_article">
      <img src="../assets/img/discount1.svg" alt="">
      <div class="article_text">
        <a href="#"><h3 class="desc__title">Free Delivery</h3></a>
        <a href="#" class="desc__text">
          Worldwide delivery on all.
          Authorit tively morph next-generation innov tion with extensive models.</a>
      </div>
    </article>
    <article class="discount_article">
      <img src="../assets/img/discount2.svg" alt="">
      <div class="article_text">
        <a href="#"><h3 class="desc__title">Sales & discounts</h3></a>
        <a href="#" class="desc__text">
          Worldwide delivery on all.
          Authorit tively morph next-generation innov tion with extensive models.</a>
      </div>
    </article>
    <article class="discount_article">
      <img src="../assets/img/discount3.svg" alt="">
      <div class="article_text">
        <a href="#"><h3 class="desc__title">Quality assurance</h3></a>
        <a href="#" class="desc__text">
          Worldwide delivery on all.
          Authorit tively morph next-generation innov tion with extensive models.</a>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Discount',
};
</script>

<style scoped lang="sass">
.bottom_discount
  height: 341px
  background-color: #222224
  display: flex
  justify-content: space-between
  align-items: flex-start
  padding-top: 89px
  padding-bottom: 89px

.discount_article
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  max-width: 333px
  & img
    max-height: 40px
    max-width: 47px
    position: absolute

.article_text
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 65px

/* .desc__title, */
/* .desc__text defined in Special component  */
</style>
