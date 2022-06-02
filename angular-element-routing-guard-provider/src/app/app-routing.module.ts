import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { TestComponent } from './components/test/test.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutGuard } from './guards/logout.guard';

const routes: Routes = [
  {path:"",outlet:"signup",component:SignUpFormComponent},
  {path:"signup",component:SignUpFormComponent,outlet:"signup"},
{ path:"home",component:HomeComponent,canActivate:[AuthGuard],canDeactivate:[LogoutGuard],outlet:"signup"},

// {path:"",loadChildren: () => import("./cobine/cobine.module").then(m => m.CobineModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
