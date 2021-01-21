<template>
  <div class="fixed-overlay" v-bind:class="{ hidden: !isVisible }" @click="closePopup">
    <div class="popup">
      <div class="popup__container" v-bind:class="{ hidden: !isVisible }" @click.stop>
        <div class="popup__header">
          <span></span>
          <span @click="closePopup" class="popup__close">&times;</span>
        </div>
        <div class="popup__content">
          <slot></slot>
        </div>
        <div class="popup__footer">
          <button v-if="btnTitle" @click="btnAction">{{ btnTitle }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    /**
     * Pass the property to show custom action button (default window's got only 'x' close button).
     * This button calls 'popupBtnAction' method of the parent component. Ensure that it's defined.
     */
    btnTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    closePopup() {
      this.isVisible = false;
    },
    /**
     * This shows popup window.
     * Call it with $refs.popup.showPopup(time) from parent component.
     * @var {float|int} time – if defined, enables popup self-close after given time in seconds.
     */
    showPopup(time = 0) {
      this.isVisible = true;
      if (time) {
        setTimeout(() => {
          this.closePopup();
        }, time * 1000);
      }
    },
    /**
     * 'popupBtnAction' should be defined in the parent component in case action button is used
     */
    btnAction() {
      this.$emit('popupBtnAction');
    },
  },
};
</script>

<style scoped lang="sass">
.hidden
  visibility: hidden

.fixed-overlay
  z-index: 999
  position: fixed
  overflow: auto
  left: 0
  top: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  transition: visibility 1s ease-in-out
.popup
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  &__container
    z-index: 1000
    padding: 10px
    width: 400px
    background-color: rgba(255, 255, 255, 0.8)
    border-radius: 3px
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.16)
    transition: visibility 1s ease-in-out
  &__header
    display: flex
    justify-content: space-between
    align-items: center
  &__content
    display: flex
    justify-content: center
    align-items: center
    padding-bottom: 15px
  &__close
    cursor: pointer
</style>
