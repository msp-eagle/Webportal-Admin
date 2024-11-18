import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', loadChildren: () => import('./layout/main/main.module').then(m => m.MainModule) },

]

@NgModule({

  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
