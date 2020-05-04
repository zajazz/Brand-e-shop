<template>
  <section class="special center">
    <div class="special__img">
      <a href="#">
        <div class="special_title">
          <p class="special_p1">30% <span class="color">OFFER</span></p>
          <p class="special_p2">FOR WOMEN</p>
        </div>
        <img alt="discount" src="../assets/img/discount.png">
      </a>
    </div>

    <div class="special__desc">
      <article class="desc__item">
        <div class="decs_img_box">
          <img alt="" class="desc__img" src="../assets/img/discount1.svg"></div>
        <div class="desc_content">
          <a href="#">
            <p class="desc__title">Free Delivery</p>
          </a>
          <a class="desc__text" href="#">
            Worldwide delivery on all. Authorit tively morph next-generation innov
            tion with extensive models.</a>
        </div>
      </article>
      <article class="desc__item">
        <div class="decs_img_box">
          <img alt="" class="desc__img" src="../assets/img/discount2.svg"></div>
        <div class="desc_content">
          <a href="#">
            <p class="desc__title">Sales & discounts</p>
          </a>
          <a class="desc__text" href="#">
            Worldwide delivery on all. Authorit tively morph next-generation innov
            tion with extensive models.</a>
        </div>
      </article>
      <article class="desc__item">
        <div class="decs_img_box">
          <img alt="" class="desc__img" src="../assets/img/discount3.svg"></div>
        <div class="desc_content">
          <a href="#">
            <p class="desc__title">Quality assurance</p>
          </a>
          <a class="desc__text" href="#">
            Worldwide delivery on all. Authorit tively morph next-generation innov
            tion with extensive models.</a>
        </div>
      </article>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Special',
};
</script>

<style lang="sass">
.special
  margin-bottom: 97px
  display: flex
  justify-content: center
  height: 529px
  &__desc
    display: flex
    flex-wrap: wrap
    flex-direction: column
    justify-content: space-between
    width: 373px
    background-color: #222224
    height: 100%
    padding: 45px 31px
  &__img
    position: relative
  &_title
    position: absolute
    top: 146px
    left: 39px
    display: flex
    flex-direction: column
  &_p1
    font-size: 54px
    font-weight: bold
    color: $bgColor
    letter-spacing: 0.03em
  &_p2
    font-size: 30px
    font-weight: bold
    color: $bgColor
    letter-spacing: 0.03em
.desc
  &__item
    display: flex
    justify-content: flex-start
    align-items: flex-start
    padding-bottom: 19px
  &_img_box
    width: 47px
    height: 40px
    margin-right: 30px
  &__title
    display: block
    font-size: 20px
    font-weight: bold
    color: #fbfbfb
    letter-spacing: 0.03em
    padding-top: 7px
    padding-bottom: 17px
  &__text
    font-size: 14px
    font-weight: 300
    color: #fbfbfb
    letter-spacing: 0.03em
    line-height: 24px
  &_content
    display: flex
    flex-direction: column
    justify-content: flex-start
</style>
