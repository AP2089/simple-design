<template>
  <Transition
    name="loader"
  >
    <div
      class="loader"
      v-if="isLoading"
    ></div>
  </Transition>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './loader.scss';
</style>