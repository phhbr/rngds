import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@rngds/home').then((component) => component.HomeComponent),
  },
  {
    path: 'team',
    loadComponent: () =>
      import('@rngds/team').then((component) => component.TeamComponent),
  },
  {
    path: 'training',
    loadComponent: () =>
      import('@rngds/training').then(
        (component) => component.TrainingComponent
      ),
  },
  {
    path: 'sponsoring',
    loadComponent: () =>
      import('@rngds/sponsoring').then(
        (component) => component.SponsoringComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('@rngds/contact').then((component) => component.ContactComponent),
  },
  { path: '**', redirectTo: '/' },
];
