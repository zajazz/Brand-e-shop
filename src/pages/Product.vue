<template>
  <div>
    <section>
      <div class="gallery">
        <div class="gallery_nav"><i class="fas fa-chevron-left"></i></div>
        <div class="photo"><img src="../assets/img/cat/full_1.png" alt=""></div>
        <div class="gallery_nav"><i class="fas fa-chevron-right"></i></div>
      </div>
      <div class="info_top"></div>
      <div class="info">
        <h3>WOMEN COLLECTION</h3>
        <div class="underline"><div></div></div>
        <h2>Moschino Cheap And Chic</h2>
        <p class="description">
          Compellingly actualize fully researched processes before proactive outsourcing.
          Progressively syndicate collaborative architectures before cutting-edge services.
          Completely visualize parallel core competencies rather than exceptional portals.
        </p>
        <div class="addinfo">
          <div>MATERIAL: <span>COTTON</span></div>
          <div>DESIGNER: <span>BINBURHAN</span></div>
        </div>
        <p class="single_price">$561</p>
        <div class="choose">
          <div class="choose_tip">
            <h3>CHOOSE COLOR</h3>
            <div class="choose_box">
              <div class="choose_colorbox color_red"></div>
              <span>Red<i class="fas fa-angle-down choose_point"></i></span>
              <div class="choose_drop">
                <ul class="sort_ul">
                  <li class="choose_list"><div class="choose_colorbox color_red"></div>Red</li>
                  <li class="choose_list"><div class="choose_colorbox color_gray"></div>Gray</li>
                  <li class="choose_list"><div class="choose_colorbox color_black"></div>Black</li>
                  <li class="choose_list"><div class="choose_colorbox color_white"></div>White</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="choose_tip">
            <h3>CHOOSE Size</h3>
            <div class="choose_box">
              <span>XXL<i class="fas fa-angle-down choose_point"></i></span>
              <div class="choose_drop">
                <ul class="sort_ul">
                  <li class="choose_list">XS</li>
                  <li class="choose_list">S</li>
                  <li class="choose_list">M</li>
                  <li class="choose_list">L</li>
                  <li class="choose_list">XL</li>
                  <li class="choose_list">XXL</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="choose_tip">
            <h3>QUANTITY</h3>
            <input name="quantity" type="number"
                   required min="1" max="5" class="choose_box" value="1" >
          </div>
        </div>
        <button class="single_atc">
          <img src="../assets/img/cart_pink.svg" alt="Add to Cart">Add to Cart</button>
      </div>
    </section>
    <section class="alsolike center">
      <h3>you may like also</h3>
      <ProductBox :featured="featured" :qty="4"></ProductBox>
    </section>
  </div>
</template>

<script>
import ProductBox from '../components/ProductBox.vue';

export default {
  name: 'Product',
  data() {
    return {
      featured: true,
    };
  },
  components: {
    ProductBox,
  },
};
</script>

<style scoped lang="sass">
.alsolike
  height: 453px
  margin: 119px 0 73px
  & h3
    font-size: 24px
    font-weight: 900
    color: #4d4d4d
    text-transform: uppercase
    text-align: center
    line-height: 18px
    padding-bottom: 72px
  &_img
    background-color: #e9e9e9
    height: 280px
    +cc
    transition: all .3s
  &_title
    font-size: 14px
    color: #6f6e6e
    text-transform: uppercase

.gallery
  position: relative
  background-color: #f7f7f7
  border-top: 1px solid #eaeaea
  display: flex
  justify-content: space-between
  align-items: center
  flex-wrap: nowrap
  &_nav
    position: relative
    font-size: 24px
    color: #fff
    height: 47px
    width: 47px
    background-color: rgba(42, 42, 42, 0.15)
    cursor: pointer
    +cc
    &:hover
      background-color: rgba(42, 42, 42, 0.35)
.photo
  padding: 10px

.info
  margin: -86px calc(50% - 570px) 120px
  padding: 73px 255px 122px
  height: 730px
  width: 1141px
  z-index: 1
  +cc()
  flex-direction: column
  background-color: $bgColor
  border: 1px solid #eaeaea
  &_top
    position: relative
    background-color: #f7f7f7
    border-bottom: 1px solid #eaeaea
    height: 86px
    z-index: -1
  & h3
    font-size: 14px
    font-weight: bold
    color: $selectColor
    text-transform: uppercase
  & h2
    font-size: 18px
    font-weight: 900
    color: #4d4d4d
    text-transform: uppercase
    padding-bottom: 67px

.underline
  margin-top: 15px
  margin-bottom: 18px
  height: 1px
  width: 147px
  background-color: #eaeaea
  & div
    height: 3px
    width: 63px
    background-color: $darkSelect
    margin-top: -1px
    margin-left: 42px
.description
  font-size: 14px
  font-weight: 300
  color: #5e5e5e
  text-align: center
  line-height: 24px

.addinfo
  margin: 28px 0 37px
  font-size: 14px
  font-weight: bold
  color: #b9b9b9
  text-transform: uppercase
  +cc()
  flex-wrap: wrap
  & div
    padding: 0 22px 0
    & span
      color: #2f2f2f
.single
  &_price
    font-size: 24px
    font-weight: bold
    color: $darkSelect
  &_atc
    margin-top: 28px
    min-height: 55px
    width: 537px
    background-color: $bgColor
    border: 1px solid $darkSelect
    font-size: 16px
    font-weight: bold
    color: $darkSelect
    cursor: pointer
    outline: none
    +cc
    +trans(all, .3s)
    & img
      height: 24px
      min-width: 26px
      margin-right: 15px
      +trans(all, .3s)
    &:hover
      background-color: $darkSelect
      color: $bgColor
      & img
        filter: brightness(10)
.choose
  margin-top: 43px
  padding: 63px 52px 0
  border-top: 1px solid #eaeaea
  width: 642px
  display: flex
  justify-content: space-between
  &_tip h3
    font-size: 14px
    font-weight: bold
    color: #2f2f2f
    text-transform: uppercase
  &_box
    margin-top: 16px
    padding-left: 12px
    display: flex
    align-items: center
    justify-content: space-between
    position: relative
    height: 35px
    width: 144px
    background-color: #ffffff
    border: 1px solid #eaeaea
    font-size: 13px
    color: #bcbcbc
    &:hover
      cursor: pointer
    & span
      width: 100%
      display: flex
      justify-content: space-between
  &_box:hover &_drop
    display: flex
  &_colorbox
    margin-right: 12px
    height: 12px
    min-width: 12px
    max-width: 12px
  &_point
    padding-right: 10px
    padding-top: 2px
  &_drop
    margin-left: 12px
    padding-bottom: 10px
    position: absolute
    top: 32px
    right: -1px
    background-color: $bgColor
    border: 1px solid #eaeaea
    display: none
    z-index: 2
    width: 144px
  //border-radius: 3px
  &_list
    display: flex
    justify-content: flex-start
    align-items: center
    padding: 10px 10px 0
    &:hover
      color: $selectColor
    &:hover .choose_colorbox
      box-shadow: 0 0 2px 0 #5e5e5e
.color_red
  background-color: #ef5b70
  border: 1px solid #ef5b70
.color_gray
  background-color: #5e5e5e
  border: 1px solid #5e5e5e
.color_black
  background-color: #222
  border: 1px solid #222
.color_white
  background-color: #fff
  border: 1px solid #eaeaea
</style>
