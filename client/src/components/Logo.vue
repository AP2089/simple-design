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
.logo {
  display: inline-flex;

  &__link {
    display: block;
    text-decoration: none;
    opacity: 1;
    transition: opacity .5s;

    &:hover {
      text-decoration: none;
      opacity: .8;
    }
  }

  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.2;
    color: #000000;
    margin-bottom: 3px;
  }

  &__title-special {
    display: inline;
    color: #BD7048;
  }

  &__subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.2;
    color: #000000;
    text-align: center;
  }
}
</style>