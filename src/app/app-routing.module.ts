import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { IdentityComponent } from './identity/identity.component';
import { VpnComponent } from './vpn/vpn.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '',component: HeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'identity', component: IdentityComponent},
  {path: 'vpn', component: VpnComponent},
  {path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
