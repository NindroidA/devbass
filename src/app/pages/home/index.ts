import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'DevBass',
        loadComponent: async () => (await import('./home.component')).HomeComponent,
    },
];
