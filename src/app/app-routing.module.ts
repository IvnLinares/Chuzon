import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate : [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule),canActivate : [NologinGuard]
  },
  {
    path: 'singin',
    loadChildren: () => import('./components/singin/singin.module').then( m => m.SinginPageModule),canActivate : [NologinGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').then( m => m.ProfilePageModule), canActivate : [AuthGuard]
  },
  {
    path: 'rutas',
    loadChildren: () => import('./components/rutas/rutas.module').then( m => m.RutasPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'paradas',
    loadChildren: () => import('./components/paradas/paradas.module').then( m => m.ParadasPageModule), canActivate : [AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
