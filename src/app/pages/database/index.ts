import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Database',
        loadComponent: async () => (await import('./database.component')).DatabaseComponent,
    },
];