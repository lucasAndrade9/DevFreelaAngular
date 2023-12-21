import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'project-create-edit',
    loadChildren: () => import('./pages/project-create-edit/project-create-edit.module').then(m => m.ProjectCreateEditModule)
  }
];
