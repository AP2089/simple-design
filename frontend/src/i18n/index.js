import {createI18n} from 'vue-i18n';
import {locale, fallbackLocale} from '@/config';
import ru from './ru.json';

export default createI18n({
  allowComposition: true,
  locale,
  fallbackLocale,
  messages: {
    ru
  }
});