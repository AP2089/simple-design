import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {requireAll} from './helpers/require';
import i18n from './i18n';
import Loader from '@/components/ui/loader';

requireAll(require.context('@/assets/sprites/', true, /\.svg$/));

const app = createApp(App);

app.use(i18n);
app.use(store);
app.use(router);

app.component('Loader', Loader);

app.mount('#app');