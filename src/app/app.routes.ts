import { Routes } from '@angular/router';

import { PublicLayout } from './layout/public-layout/public-layout';

export const routes: Routes = [

    {
        path: '',
        component: PublicLayout,
        children: [

            {
                path: 'home',
                loadComponent: () =>
                    import('./features/user/home/home')
                        .then(m => m.Home)
            },

            {
                path: 'services',
                loadComponent: () =>
                    import('./features/user/services/services')
                        .then(m => m.Services)
            },

            {
                path: 'about',
                loadComponent: () =>
                    import('./features/user/about/about')
                        .then(m => m.About)
            },
            {
                path: 'doctors',
                loadComponent: () =>
                    import('./features/user/doctors/doctors')
                        .then(m => m.Doctors)
            },

            {
                path: 'contact',
                loadComponent: () =>
                    import('./features/user/contact/contact')
                        .then(m => m.Contact)
            },
              {
                path: 'appointment',
                loadComponent: () =>
                    import('./features/user/book-appointment/book-appointment')
                        .then(m => m.BookAppointment)
            },
            {path:'', redirectTo:'home', pathMatch:'full'},


        ]
    },

    //   {
    //     path: 'login',
    //     loadComponent: () =>
    //       import('./features/auth/login.component')
    //         .then(m => m.LoginComponent)
    //   },

    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
