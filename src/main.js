import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import BankAccounts from './components/BankAccounts.vue'
import OtherAssets from './components/OtherAssets.vue'
import RetirementAccounts from './components/RetirementAccounts.vue'
import Loans from './components/Loans.vue'
import PersonalDetails from '@/components/PersonalDetails';
import {createRouter, createWebHistory} from 'vue-router';
import '@formkit/themes/genesis';
import { plugin, defaultConfig } from '@formkit/vue'

const routes = [
    {path: '/', component: PersonalDetails},
    {path: '/personal-details', component: PersonalDetails},
    {path: '/bank-accounts', component: BankAccounts},
    {path: '/other-assets', component: OtherAssets},
    {path: '/loans', component: Loans},
    {path: '/retirement-accounts', component: RetirementAccounts},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(plugin, defaultConfig);

app.mount('#app');
