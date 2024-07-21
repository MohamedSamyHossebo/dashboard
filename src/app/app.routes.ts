import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { TablesComponent } from './components/tables/tables.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'main', component: MainDashboardComponent },
    { path: 'market', component: MarketplaceComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'kanban', component: KanbanComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }

];
