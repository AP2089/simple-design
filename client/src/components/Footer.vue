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
.footer {
  flex: 0 0 auto;

  &__cols {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: calc(100% + 15px);
    margin-left: -15px;
    padding: 50px 0 70px 0;
  }

  &__col {
    padding-left: 15px;
    width: 25%;

    &:last-child {
      display: flex;
      justify-content: flex-end;
    }
  }

  &__extra {
    padding: 40px 0;
    background-color: #262626;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.2;
    color: #FFFFFF;
    text-align: center;
  }
}
</style>