import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { DemoComponent } from './demo/demo.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DemoComponent,
    canActivate: [AuthGuard],
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
