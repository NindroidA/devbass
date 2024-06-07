import { Routes } from '@angular/router';
import { authGuard } from '@lib/guards';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: async () => (await import('@pages/auth')).routes,
        canMatch: [authGuard({ requiresAuthentication: false })],
    },
    {
        path: '',
        loadChildren: async () => (await import('@pages/home')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'dashboard',
        loadChildren: async () => (await import('@pages/dashboard')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'search',
        loadChildren: async () => (await import('@pages/search')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'database',
        loadChildren: async () => (await import('@pages/database')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'upload',
        loadChildren: async () => (await import('@pages/upload')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'users/:username',
        loadChildren: async () => (await import('@pages/user')).routes,
        canMatch: [authGuard()],
    },
    {
        path: 'settings',
        loadChildren: async () => (await import('@pages/settings')).routes,
        canMatch: [authGuard()],
    },
    {
        path: '**',
        loadComponent: async () => (await import('@pages/screens/not-found/not-found.component')).NotFoundComponent,
    },
];
