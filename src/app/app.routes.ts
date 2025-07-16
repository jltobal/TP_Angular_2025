import { Routes } from '@angular/router';
import { CafeAboutComponent } from './cafe-about/cafe-about.component';
import { CafeTypesComponent } from './cafe-types/cafe-types.component';

export const routes: Routes = [
    {path: '',
    redirectTo: 'cafe',
    pathMatch: 'full'
      },
    {path: 'about', component: CafeAboutComponent},
    {path: 'cafe', component: CafeTypesComponent}
];
