import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import CKEditor from '@ckeditor/ckeditor5-vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import $httpMessageState from '@/libs/pushMessageState';
import App from './App.vue';
import router from './router';
import { date, currency } from './libs/filters';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');

const app = createApp(App);
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.config.globalProperties.$filters = {
  date,
  currency,
};
app.use(router)
  .use(VueAxios, axios)
  .use(CKEditor)
  .component('Loading', Loading)
  .component('Form', Form)
  .component('Field', Field)
  .component('ErrorMessage', ErrorMessage)
  .mount('#app');
