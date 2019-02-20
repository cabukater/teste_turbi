import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserResolver } from './components/user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { NpsComponent } from './components/nps/nps.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'nps', component: NpsComponent,  resolve: { data: UserResolver}},
];
