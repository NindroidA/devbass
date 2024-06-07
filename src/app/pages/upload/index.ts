import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Upload',
        loadComponent: async () => (await import('./upload.component')).UploadComponent,
    },
];