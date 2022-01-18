import Vue from 'vue'
import Router from 'vue-router'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Reviews from "@/home/Reviews";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                header: Header,
                footer: Footer,
                reviews: Reviews,
                //aside: Aside,
                default: () => import('@/views/Home.vue')
            },
            meta: {
                title: 'Системные решения | PARTNER',
                description: '',
            },
            children: [],
        },
        {
            path: '/about-company',
            name: 'about-company',
            components: {
                header: Header,
                footer: Footer,
                reviews: Reviews,
                //aside: Aside,
                default: () => import('@/pages/AboutCompany.vue')
            },
            meta: {
                title: 'О компании | PARTNER',
                description: '',
            },
            children: [],
        },
        {
            path: '/business-automation',
            name: 'business-automation',
            components: {
                header: Header,
                footer: Footer,
                reviews: Reviews,
                //aside: Aside,
                default: () => import('@/pages/services/BusinessAutomation.vue')
            },
            meta: {
                title: 'Автоматизация бизнеса | PARTNER',
                description: '',
            },
            children: [],
        },
        {
            path: '/public-automation',
            name: 'public-automation',
            components: {
                header: Header,
                footer: Footer,
                reviews: Reviews,
                //aside: Aside,
                default: () => import('@/pages/services/PublicAutomation.vue')
            },
            meta: {
                title: 'Автоматизация учреждений госсектора | PARTNER',
                description: '',
            },
            children: [],
        },
        {
            path: '/consulting',
            name: 'consulting',
            components: {
                header: Header,
                footer: Footer,
                reviews: Reviews,
                //aside: Aside,
                default: () => import('@/pages/services/Consulting.vue')
            },
            meta: {
                title: 'Консалтинговые услуги | PARTNER',
                description: '',
            },
            children: [],
        },
        {
            path: '/accounting-services',
            name: 'accounting-services',
            components: {
                header: Header,
                footer: Footer,
                reviews: Reviews,
                //aside: Aside,
                default: () => import('@/pages/services/AccountingServices.vue')
            },
            meta: {
                title: 'Бухгалтерское обслуживание | PARTNER',
                description: '',
            },
            children: [],
        },
        {
            path: '/it-outsourcing',
            name: 'it-outsourcing',
            components: {
                header: Header,
                footer: Footer,
                reviews: Reviews,
                //aside: Aside,
                default: () => import('@/pages/services/ItOutsourcing.vue')
            },
            meta: {
                title: 'IT - аутсорсинг | PARTNER',
                description: '',
            },
            children: [],
        },
        {
            path: '/contacts',
            name: 'contacts',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/pages/Contacts.vue')
            },
            meta: {
                title: 'Контакты | PARTNER',
                description: '',
            },
            children: [],
        },
        {
            path: '/account',
            name: 'account',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/account/Account.vue')
            },
            meta: {
                title: 'Личный кабинет | PARTNER',
                description: '',
            },
            children: [],
        },
    ]
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let meta = document.createElement('meta');
    meta.name = "description";
    meta.content = to.meta.description;
    document.getElementsByTagName('head')[0].appendChild(meta);

    next()
});
export default router;