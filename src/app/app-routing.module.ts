import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule)},
{path: 'productos',loadChildren:() => import('./page/listaproductos/listaproductos.module').then(m => m.ListaproductosModule)},
{path:'vercompra',loadChildren:()=>import('./page/carrito/carrito.module').then(m=>m.CarritoModule)}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
