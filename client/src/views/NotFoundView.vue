<template>
  <MainLayout>
    <div class="center">
      <h1>{{$t('page.not.found')}}</h1>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';

export default {
  name: 'NotFound',
  components: {
    MainLayout
  }
}
</script>