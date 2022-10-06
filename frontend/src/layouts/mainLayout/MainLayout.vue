<template>
  <div class="wrap">
    <Header>
      <template v-slot:left>
        <Logo />
      </template>

      <template v-slot:middle>
        <MainMenu
          :items="mainMenu"
        />
      </template>

      <template v-slot:right>
        <MainContact
          :phone="contacts.phone"
          :time="contacts.time"
        />
      </template>
    </Header>

    <div class="middle">
      <slot></slot>
    </div>

    <Footer>
      <template v-slot:col-1>
        <Logo />
      </template>

      <template v-slot:col-2>
        <InfoMenu
          :items="mainMenu"
        />
      </template>

      <template v-slot:col-3>
        <InfoMenu
          :items="extraMenu"
          @controlModal="controlModalExtraMenu"
        />
      </template>

      <template v-slot:col-4>
        <MainContact
          :phone="contacts.phone"
          :time="contacts.time"
        />
      </template>

      <template v-slot:bottom>
        (с) {{currentYear}}. {{$t('all.rights.reserved')}}
      </template>
    </Footer>

    <Modal
      v-for="item in extraMenu"
      :key="item.url"
      :heading="item.title"
      :isShow="item.isShow"
      @controlModal="controlModalExtraMenu"
    >
      {{item.description}}
    </Modal>

    <Loader
      :isLoading="isLoading"
    />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Modal from '@/components/ui/modal';
import Logo from '@/components/logo';
import MainMenu from '@/components/mainMenu';
import MainContact from '@/components/mainContact';
import InfoMenu from '@/components/infoMenu';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
    Modal,
    Logo,
    MainMenu,
    MainContact,
    InfoMenu
  },
  methods: {
    ...mapActions('meta', [
      'fetchMeta',
      'controlModalExtraMenu'
    ])
  },
  computed: {
    ...mapGetters('meta', [
      'mainMenu',
      'extraMenu',
      'contacts',
      'currentYear',
      'error',
      'isLoading'
    ])
  },
  mounted() {
    this.fetchMeta();
  }
}
</script>