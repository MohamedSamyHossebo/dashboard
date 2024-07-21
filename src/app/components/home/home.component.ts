import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { KanbanComponent } from '../kanban/kanban.component';
import { MainDashboardComponent } from '../main-dashboard/main-dashboard.component';
import { MarketplaceComponent } from '../marketplace/marketplace.component';
import { TablesComponent } from '../tables/tables.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileNavComponent } from '../../shared/components/profile-nav/profile-nav.component';
import { SideBarComponent } from '../side-bar/side-bar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    RouterOutlet,

    MainDashboardComponent,
    MarketplaceComponent,
    TablesComponent,
    KanbanComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ProfileNavComponent,
    SideBarComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor() {
  }
}
