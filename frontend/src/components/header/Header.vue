<template>
  <header class="header">
    <div class="header__center center">
      <div class="header__wrap">
        <div class="header__left">
          <slot name="left"></slot>
        </div>
        <div class="header__middle">
          <slot name="middle"></slot>
        </div>
        <div class="header__right">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import './header';
</style>