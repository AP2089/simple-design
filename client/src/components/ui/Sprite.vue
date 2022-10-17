<template>
  <svg :class="variant">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script>
export default {
  name: 'Sprite',
  props: {
    name: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: ''
    }
  }
}
</script>