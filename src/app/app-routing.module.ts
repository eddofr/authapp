import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { AuthGuard } from './services/auth.guard';
import { authpruebaGuard } from './services/authprueba.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { 
    path: 'protegida', 
    component: ProtegidaComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'precios', component: PreciosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
