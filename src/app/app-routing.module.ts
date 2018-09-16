import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const appRoutes: Routes = [ // ruta + componente
//   {
//     path : '',//si no pone nada es la ruta principal
//     component : MemeFeedComponent
//   },
//   {
//     path: 'feed',
//     component: MemeFeedComponent
//   },
 
// ];