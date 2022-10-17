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
.header {
  &__wrap {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 46px;
    min-height: 121px;
  }

  &__left {
    margin-right: auto;
  }

  &__middle {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  &__right {
    margin-left: auto;
  }
}
</style>