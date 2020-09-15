<template>
  <div class="top-filter">
    <div class="top-filter__part">
      <p class="filter_caption">Trending now</p>
      <p class="filter_trand">
        <a href="#">Bohemian</a>&nbsp;|&nbsp;<a href="#" class="trand_activ">Floral</a>&nbsp;|&nbsp;
        <a href="#">Lace</a></p>
      <p class="filter_trand">
        <a href="#">Floral</a>&nbsp;|&nbsp;<a href="#">Lace</a>&nbsp;|&nbsp;
        <a href="#">Bohemian</a></p>
    </div>
    <div class="top-filter__part">
      <p class="filter_caption">Size</p>
      <div class="sizes">
        <input class="checkbox" id="xxs" type="checkbox" name="size">
        <label for="xxs">XXS</label>
        <input class="checkbox" id="xs" type="checkbox" name="size"><label for="xs">XS</label>
        <input class="checkbox" id="s" type="checkbox" name="size"><label for="s">S</label>
        <input class="checkbox" id="m" type="checkbox" name="size"><label for="m">M</label>
        <input class="checkbox" id="l" type="checkbox" name="size"><label for="l">L</label>
        <input class="checkbox" id="xl" type="checkbox" name="size"><label for="xl">XL</label>
        <input class="checkbox" id="xxl" type="checkbox" name="size">
        <label for="xxl">XXL</label>
      </div>
    </div>
    <div class="top-filter__part">
      <p class="filter_caption">pRICE</p>
      <div id="slider" class="range"></div>
      <div class="price_range">
        <div>${{ min }}</div>
        <div>${{ max }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import noUiSlider from 'nouislider';
import '../assets/css/nouislider.css';
import { mapActions, mapState } from 'vuex';


export default {
  name: 'CatalogFilter',
  data() {
    return {
      min: 0,
      max: 0,
    };
  },
  computed: {
    ...mapState(['filtered']),
    slider() {
      return document.getElementById('slider');
    },
    maxPrice() {
      return this.$_.max(this.filtered, (good) => good.price).price;
    },
    minPrice() {
      return this.$_.min(this.filtered, (good) => good.price).price;
    },
  },
  methods: {
    ...mapActions(['filterProducts']),
  },
  mounted() {
    this.min = this.minPrice;
    this.max = this.maxPrice;

    // create price range input
    noUiSlider.create(this.slider, {
      start: [this.min, this.max],
      connect: true,
      range: {
        min: this.minPrice,
        max: this.maxPrice,
      }
    });

    // assign handler for range input
    this.slider.noUiSlider.on('set', (range) => {
      this.min = parseInt(range[0], 10);
      this.max = parseInt(range[1], 10);
      this.filterProducts(range);
    });
  },
};

</script>

<style lang="sass">
.top-filter
  padding-top: 12px
  display: flex
  justify-content: space-between
  flex-wrap: wrap

.trand_activ
  color: $selectColor

.filter
  &_trand
    font-size: 14px
    color: #dfdfdf
    line-height: 26px
  &_trand a
    color: #6f6e6e
    &:hover
      cursor: pointer
      color: $selectColor
  &_caption
    padding-bottom: 25px
    font-size: 14px
    font-weight: bold
    color: #6f6e6e
    text-transform: uppercase

.sizes
  font-size: 14px
  color: #6f6e6e
  text-align: left
  line-height: 20px
  display: flex
  flex-wrap: wrap

.checkbox
  position: absolute
  z-index: -1
  opacity: 0
  margin: 10px 0 0 20px
  & + label
    position: relative
    padding-left: 25px
    padding-right: 23px
    cursor: pointer
    &:hover
      color: $selectColor
    &:before
      content: ''
      position: absolute
      top: 2px
      left: 0
      height: 13px
      width: 13px
      background-color: $bgColor
      border: 1px solid #ebebeb
      transition: .2s
    &:after
      content: ''
      position: absolute
      top: 0
      left: 0
      transition: .2s
  &:checked + label
    &:before
      background: #f0f0f0
    &:after
      content: '\2713'
      font-weight: bold
      left: 2px

.range
  width: 262px


.price_range
  padding-top: 17px;
  width: 262px
  display: flex
  justify-content: space-between
  font-size: 14px
  color: #6f6e6e

.top-filter__part
  max-width: 33%
  min-width: 236px
  padding-bottom: 43px
</style>
