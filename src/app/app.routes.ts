import { Routes } from '@angular/router';

const featureRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home)
  },
  {
    path: 'servicos',
    loadComponent: () => import('./features/services/services').then(m => m.Services)
  },
  {
    path: 'services',
    redirectTo: 'servicos'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio/portfolio').then(m => m.Portfolio)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./features/about/about').then(m => m.About)
  },
  {
    path: 'about',
    redirectTo: 'sobre'
  },
  {
    path: 'equipe',
    loadComponent: () => import('./features/team/team').then(m => m.Team)
  },
  {
    path: 'team',
    redirectTo: 'equipe'
  },
  {
    path: 'contato',
    loadComponent: () => import('./features/contact/contact').then(m => m.Contact)
  },
  {
    path: 'contact',
    redirectTo: 'contato'
  },
  {
    path: 'privacidade',
    loadComponent: () => import('./features/privacy/privacy').then(m => m.Privacy)
  },
  {
    path: 'privacy',
    redirectTo: 'privacidade'
  },
  {
    path: 'termos',
    loadComponent: () => import('./features/terms/terms').then(m => m.Terms)
  },
  {
    path: 'terms',
    redirectTo: 'termos'
  }
];

export const routes: Routes = [
  {
    path: 'pt',
    children: featureRoutes
  },
  {
    path: 'en',
    children: featureRoutes
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pt'
  },
  {
    path: 'servicos',
    redirectTo: 'pt/servicos'
  },
  {
    path: 'portfolio',
    redirectTo: 'pt/portfolio'
  },
  {
    path: 'sobre',
    redirectTo: 'pt/sobre'
  },
  {
    path: 'equipe',
    redirectTo: 'pt/equipe'
  },
  {
    path: 'contato',
    redirectTo: 'pt/contato'
  },
  {
    path: '**',
    redirectTo: 'pt'
  }
];
