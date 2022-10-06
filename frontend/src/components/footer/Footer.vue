<template>
  <footer class="footer">
    <div class="footer__main">
      <div class="center">
        <div class="footer__cols">
          <div class="footer__col">
            <slot name="col-1"></slot>
          </div>
          <div class="footer__col">
            <slot name="col-2"></slot>
          </div>
          <div class="footer__col">
            <slot name="col-3"></slot>
          </div>
          <div class="footer__col">
            <slot name="col-4"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__extra">
      <div class="center">
        <slot name="bottom"></slot>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
@import './footer';
</style>