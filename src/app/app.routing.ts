import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'window/comp-a',
    component: AComponent
  },
  {
    path: 'window/comp-b',
    component: BComponent
  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
