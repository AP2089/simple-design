<template>
  <div class="logo">
    <router-link to="/" class="logo__link">
      <div class="logo__title">Simple <span class="logo__title-special">Design</span></div>
      <div class="logo__subtitle">{{ $t('logo.subtitle') }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style lang="scss" scoped>
@import './logo.scss';
</style>