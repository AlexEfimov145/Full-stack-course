import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ListComponent } from './components/products/list/list.component';
import { AboutComponent } from './components/about/about/about.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';

export const routes: Routes = [
    {path: 'home',component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch:"full"},
    {path: 'products',component: ListComponent},
    {path: 'about',component: AboutComponent},
    {path: '**',component: NotFoundComponent}
];
