import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./home/home').then(m => m.Home)},
    {path: 'tasks', loadComponent: () => import('./tasks/tasks').then(m => m.Tasks)},
];
