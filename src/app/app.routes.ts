import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { ProgramDetailsComponent } from './pages/program-details/program-details.component';

export const routes: Routes = [
    {path:"", component:SearchComponent},
    {path:"program-detail", component:ProgramDetailsComponent}
];
