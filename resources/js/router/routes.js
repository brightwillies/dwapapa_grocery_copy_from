// import store from './../state/store'

export default [
    {
        path: '/administrator-login',
        name: 'login',
        component: () => import('../views/pages/account/login'),
    //     meta: {
    //         beforeResolve(routeTo, routeFrom, next) {
    //             // If the user is already logged in
    //             if (store.getters['auth/loggedIn']) {
    //                 // Redirect to the home page instead
    //                 next({ name: 'home' })
    //             } else {
    //                 // Continue to the login page
    //                 next()
    //             }
    //         },
    //     },
    },

    {
        path: '/administrator-dashboard',
        name: 'home',
        // meta: {
        //     authRequired: true,
        // },
        component: () => import('../views/layouts/main.vue')
    },
    
    
    
]
