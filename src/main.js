import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';
import store from './store/index.js'
import '@fortawesome/fontawesome-free/js/all'
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDropdown from './components/ui/BaseDropdown.vue';
import BaseModal from './components/ui/BaseModal.vue';

const app = createApp(App);
app.use(store);
app.use(router);



app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.component('base-badge',BaseBadge);
app.component('base-dialog',BaseDialog);
app.component('base-spinner',BaseSpinner);
app.component('base-dropdown',BaseDropdown);
app.component('base-modal',BaseModal);


app.mount('#app');
